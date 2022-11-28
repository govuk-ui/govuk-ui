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
  const fixturesFilePath = path.resolve(__dirname, `../../node_modules/govuk-frontend/govuk/components/${kebabedComponent}/fixtures.json`);
  const fixtures = fs.readFileSync(fixturesFilePath);
  const fixtureData = JSON.parse(fixtures);

  let storyFileContent = `
  import type { Meta, StoryObj } from '@storybook/react';

  import ${component} from '../components/${component}';
  import fixtures from 'govuk-frontend/govuk/components/${kebabedComponent}/fixtures.json';
  
  const meta: Meta<typeof ${component}> = {
    title: '${component}',
    component: ${component},
  };

  export default meta;
  type Story = StoryObj<typeof ${component}>;`

  const fixtureNames = [];
  fixtureData.fixtures.forEach(fixture => {
    let fixtureName = fixture.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    fixtureName = fixtureName.replace(/\s/g, "");
    fixtureName = fixtureName.replace('-', '');
    fixtureName = fixtureName.replace(',', '');
    fixtureName = fixtureName.trim();
    fixtureName = fixtureName[0].toLowerCase() + fixtureName.substring(1);
    if (fixtureName === 'default') {
      fixtureName = 'primary';
    }
    fixtureNames.push(fixtureName);
    storyFileContent += `\n  const ${fixtureName}: Story = { }`;
  });

  storyFileContent += `\n  const stories: Story[] = [];`;
  fixtureNames.forEach(f => {
    storyFileContent += `\n  stories.push(${f});`;
  });
  

  storyFileContent += `\n  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {`;
  fixtureNames.forEach(f => {
    storyFileContent += `\n    ${f},`;
  });
  storyFileContent += `\n  };`;

  if (!fs.existsSync(storyPath)) {
    console.log(`... writing story file for ${component} component`);
    fs.writeFileSync(storyPath, storyFileContent);
  }
  
});
