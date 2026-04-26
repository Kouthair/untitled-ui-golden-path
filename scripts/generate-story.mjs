import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Running generate-story.mjs...');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Error: Provide a path.');
  process.exit(1);
}

const absolutePath = path.resolve(__dirname, '..', filePath);
let relativePath = path.relative(path.resolve(__dirname, '..', 'vendor/ui'), absolutePath).replace(/\.tsx?$/, '');

if (!fs.existsSync(absolutePath)) {
  console.error('Error: File not found: ' + absolutePath);
  process.exit(1);
}

let content = fs.readFileSync(absolutePath, 'utf8');
content = content.replace(/"use client";?/g, '');
content = content.replace(/^import\s+.*$/gm, '');

let componentName = 'UnknownComponent';
const exportMatches = content.match(/export\s+(?:const|function)\s+(\w+)\s*=/g);
if (exportMatches) {
  // Find the main component (usually the last export or one that looks like a component)
  const componentExports = exportMatches.map(match => {
    const nameMatch = match.match(/export\s+(?:const|function)\s+(\w+)\s*=/);
    return nameMatch ? nameMatch[1] : null;
  }).filter(name => name && name !== 'styles' && !name.includes('Props') && !name.includes('Type'));
  
  if (componentExports.length > 0) {
    componentName = componentExports[componentExports.length - 1]; // Take the last one, usually the main component
  }
}

// Fallback to other patterns
if (componentName === 'UnknownComponent') {
  const defaultMatch = content.match(/export\s+default\s+(\w+)/);
  if (defaultMatch) {
    componentName = defaultMatch[1];
  } else {
    const aliasMatch = content.match(/export\s*\{\s*\w+\s+as\s+(\w+)\s*\}/);
    if (aliasMatch) {
      componentName = aliasMatch[1];
    }
  }
}

const unionTypes = [];
// Note: Union type extraction is disabled as types are defined in separate files
const uniqueUnions = [];

const argTypesBlock = uniqueUnions.map(union => {
    const [propName, optionsStr] = union.split('|').map(s => s.trim());
    const options = optionsStr.split('|').map(s => s.trim());
    const optionsArray = options.map(o => `"${o}"`).join(', ');
    return `    ${propName}: {
      control: 'select',
      options: [${optionsArray}],
      description: 'Extracted from component TypeScript interface.',
    },`;
}).join(',\n');

const defaultArgs = uniqueUnions.reduce((acc, union) => {
  const [propName, optionsStr] = union.split('|').map(s => s.trim());
  const options = optionsStr.split('|').map(s => s.trim());
  acc[propName] = options[0];
  return acc;
}, {});

const storyCode = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from "@/${relativePath}";

const meta: Meta<typeof ${componentName}> = {
  title: 'Base/${componentName}',
  component: ${componentName},
  argTypes: {
${argTypesBlock}
  },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {},
};
`;

console.log('\n--- STORY CODE ---');
console.log(storyCode);