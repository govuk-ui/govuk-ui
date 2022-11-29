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
  const componentsTypePath = path.resolve(__dirname, `../components/${component}/${component}.types.ts`);
  const componentType = fs.readFileSync(componentsTypePath).toString().split("\n");;

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
  const swaps = {
    'default': 'primary',
    'for': 'htmlFor'
  };
    fixtureData.fixtures.filter(f => !f.hidden).forEach(fixture => {
    let fixtureName = fixture.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    fixtureName = fixtureName.replace(/\s/g, "");
    fixtureName = fixtureName.replace(/[^a-z]/gi, '');
    fixtureName = fixtureName[0].toLowerCase() + fixtureName.substring(1);
    if (swaps[fixtureName]) {
      fixtureName = swaps[fixtureName];
    }
    if (!fixtureNames.includes(fixtureName)) {
      fixtureNames.push(fixtureName);
      storyFileContent += `\n  const ${fixtureName}: Story = { name: '${fixture.name.replace(/[^a-z0-9\s]/gi, '')}' }`;
    }
  });

  storyFileContent += `\n\n  const stories: Story[] = [];`;
  fixtureNames.forEach(f => {
    storyFileContent += `\n  stories.push(${f});`;
  });

  storyFileContent += `\n\n  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9\s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {`
  
  componentType.shift();
  componentType.pop();
  componentType.forEach(typeAttribute => {
    let ta = typeAttribute.trim();
    ta = ta.split(':')[0]
    ta = ta.replace('?','');
    ta = ta.trim();
    storyFileContent += `\n        ${ta}: fixture.options.${Object.keys(swaps).find(key => swaps[key] === ta) || ta},`
  });

  storyFileContent += `\n      }
    }
  });

  export {`;
  fixtureNames.forEach(f => {
    storyFileContent += `\n    ${f},`;
  });
  storyFileContent += `\n  };\n`;

  if (!fs.existsSync(storyPath)) {
    console.log(`... writing story file for ${component} component`);
    fs.writeFileSync(storyPath, storyFileContent);
  }
  
});
