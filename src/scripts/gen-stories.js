const fs = require('fs');
const path = require('path');

console.log('... Generate Stories from Gov UK Frontend ...');

// get list of components from components folder
const componentsList = [];
const componentsPath = path.resolve(__dirname, '../components');
const components = fs.readdirSync(componentsPath);
components.forEach(component => {
  const componentDirectory = path.resolve(componentsPath, component);
  if (fs.lstatSync(componentDirectory).isDirectory()) {
    componentsList.push(component);
  }
});

// generate a story file
componentsList.forEach(component => {
  const storyPath = path.resolve(__dirname, `../stories/${component}.stories.tsx`);
  const kebabedComponent = component.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const storyFileContent = `
  import type { Meta, StoryObj } from '@storybook/react';

  import ${component} from '../components/${component}';
  import fixtures from 'govuk-frontend/govuk/components/${kebabedComponent}/fixtures.json';
  
  const meta: Meta<typeof ${component}> = {
    title: '${component}',
    component: ${component},
  };

  export default meta;
  type Story = StoryObj<typeof ${component}>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };`;

  if (!fs.existsSync(storyPath)) {
    console.log(`... writing story file for ${component} component`);
    fs.writeFileSync(storyPath, storyFileContent);
  }
  
});
