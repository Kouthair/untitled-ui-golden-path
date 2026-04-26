import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_COMPONENTS_DIR = path.resolve(__dirname, '../vendor/ui/components/base');
const STORIES_DIR = path.resolve(__dirname, '../src/stories');

console.log('🎨 Auto-generating Storybook stories for all base components...\n');

// Ensure stories directory exists
if (!fs.existsSync(STORIES_DIR)) {
  fs.mkdirSync(STORIES_DIR, { recursive: true });
}

function extractComponentInfo(componentPath) {
  const content = fs.readFileSync(componentPath, 'utf8');
  const fileName = path.basename(componentPath, '.tsx');

  // Extract component name from file
  const componentNameMatch = content.match(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/);
  const componentName = componentNameMatch ? componentNameMatch[2] : fileName;

  // Extract props interface if it exists
  const propsInterfaceMatch = content.match(/interface\s+(\w+Props)\s*{([^}]*)}/s);
  let props = [];

  if (propsInterfaceMatch) {
    const propsContent = propsInterfaceMatch[2];
    // Extract prop names (basic regex, could be enhanced)
    const propMatches = propsContent.matchAll(/(\w+)\s*\?/g);
    props = Array.from(propMatches, match => match[1]);
  }

  return { componentName, props, fileName };
}

function generateStory(componentPath, relativePath) {
  const { componentName, props, fileName } = extractComponentInfo(componentPath);

  // Convert path to import path
  const importPath = relativePath.replace(/\\/g, '/').replace(/\.tsx?$/, '');

  // Generate argTypes based on props
  const argTypes = props.map(prop => `    ${prop}: { control: 'text' }`).join(',\n');

  const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from '${importPath}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Base/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
${argTypes ? argTypes + ',' : ''}
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
${props.slice(0, 3).map(prop => `    ${prop}: '${prop} value'`).join(',\n')}
  },
};

// Generate additional variants for components with many props
${props.length > 3 ? `
export const WithAllProps: Story = {
  args: {
${props.map(prop => `    ${prop}: '${prop} example'`).join(',\n')}
  },
};` : ''}
`;

  return storyContent;
}

function processDirectory(dir, relativeBase = '') {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath, path.join(relativeBase, item));
    } else if (item.endsWith('.tsx') && !item.endsWith('.stories.tsx')) {
      const relativePath = path.join(relativeBase, item);
      const storyPath = path.join(STORIES_DIR, relativePath.replace('.tsx', '.stories.tsx'));

      // Ensure story directory exists
      const storyDir = path.dirname(storyPath);
      if (!fs.existsSync(storyDir)) {
        fs.mkdirSync(storyDir, { recursive: true });
      }

      console.log(`📝 Generating story for: ${relativePath}`);
      const storyContent = generateStory(fullPath, `@ui/components/base/${relativePath}`);

      fs.writeFileSync(storyPath, storyContent);
    }
  }
}

// Generate stories for all base components
if (fs.existsSync(BASE_COMPONENTS_DIR)) {
  processDirectory(BASE_COMPONENTS_DIR);
  console.log('\n✅ Auto-storybooking complete! Run `npm run storybook` to view all stories.');
} else {
  console.log('❌ Base components directory not found. Run `npm run sync-ui` first.');
}