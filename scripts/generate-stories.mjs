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

  // Extract component name from export statement - try multiple patterns
  let componentName = null;

  // Pattern 1: export { ComponentName }
  const exportMatch = content.match(/export\s*{\s*(\w+)\s*}/);
  if (exportMatch) {
    componentName = exportMatch[1];
  }

  // Pattern 2: export const ComponentName =
  if (!componentName) {
    const constMatch = content.match(/export\s+const\s+(\w+)\s*=/);
    if (constMatch) {
      componentName = constMatch[1];
    }
  }

  // Pattern 3: export default function ComponentName
  if (!componentName) {
    const defaultMatch = content.match(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/);
    if (defaultMatch) {
      componentName = defaultMatch[2];
    }
  }

  // Fallback: Convert filename to PascalCase
  if (!componentName) {
    componentName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  return { componentName, props: [], fileName };
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
  title: 'Base/${fileName}',
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
    } else if (item.endsWith('.tsx') && !item.endsWith('.stories.tsx') && !item.endsWith('.demo.tsx') && !item.endsWith('.story.tsx')) {
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