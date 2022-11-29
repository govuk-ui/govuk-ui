const fs = require('fs');
const path = require('path');

console.log('... Generate Components from Gov UK Frontend ...');

// get the list of components from govuk-frontend
const componentsPath = path.resolve(__dirname, '../../node_modules/govuk-frontend/govuk/components')
const components = fs.readdirSync(componentsPath);
const componentsToGen = [];
components.forEach(component => {
  const fullPath = path.resolve(componentsPath, component);
  if (fs.lstatSync(fullPath).isDirectory()) {
    componentsToGen.push(component);
  }
});

// create components we dont have in this project
componentsToGen.forEach(c => {
  const camelisedComponent = c.replace(/-./g, x=>x[1].toUpperCase());
  const casedComponent = camelisedComponent[0].toUpperCase() + camelisedComponent.substring(1)
  let componentPath = path.resolve(__dirname, `../components/${casedComponent}`);
  let componentFixturePath = path.resolve(__dirname, `../../node_modules/govuk-frontend/govuk/components/${c}/fixtures.json`);
  
  // folder
  if (!fs.existsSync(componentPath)) {
    console.log(`... making directory for ${c}`);
    fs.mkdirSync(componentPath);
  }
  
  // index file
  const indexFilePath = path.resolve(componentPath, 'index.ts');
  if (!fs.existsSync(indexFilePath)) {
    console.log(`... writing index file for ${casedComponent} component`);
    const indexFileContent = `export { default } from './${casedComponent}';`
    fs.writeFileSync(indexFilePath, indexFileContent);
  }

  // loop through fixtures
  const fixtures = fs.readFileSync(componentFixturePath);
  const fixtureData = JSON.parse(fixtures);
  const attributes = [];
  const attributeTypes = {};
  const variants = [];
  fixtureData?.fixtures?.forEach(fixture => {
    variants.push(fixture.name);
    Object.keys(fixture?.options).forEach(k => {
      attributes.push(k);
      attributeTypes[k] = typeof fixture.options[k];
      if (typeof fixture.options[k] === 'object') {
        if (Array.isArray(fixture.options[k])) {
          attributeTypes[k] = 'any[]';
        } else {
          attributeTypes[k] = 'any';
        }
      }
    });
  });
  const uniqueAttributes = [ ...new Set(attributes)];

  // type file
  const typeFilePath = path.resolve(componentPath, `${casedComponent}.types.ts`);
  const swaps = {
    'for': 'htmlFor'
  };
  if (!fs.existsSync(typeFilePath)) {
    console.log(`... writing types file for ${casedComponent} component`);
    let typeFileContent = `export default interface ${casedComponent}Props {`;
    uniqueAttributes.forEach(att => {
      let attributeName = att;
      if (swaps[att]) {
        attributeName = swaps[att];
      }
      typeFileContent += `\n  ${attributeName}?: ${attributeTypes[att]},`
    });
    typeFileContent += `\n}`;
    fs.writeFileSync(typeFilePath, typeFileContent);
  }

  // component file
  const componentFilePath = path.resolve(componentPath, `${casedComponent}.tsx`);
  if (!fs.existsSync(componentFilePath)) {
    console.log(`... writing component file for ${casedComponent} component`);
    let componentFileContent = `
    import React from 'react';
    import ${casedComponent}Props from './${casedComponent}.types';
    
    export const ${casedComponent} = ({`;

    uniqueAttributes.forEach(a => {
      let attributeName = a;
      if (swaps[a]) {
        attributeName = swaps[a];
      }
      componentFileContent += `\n      ${attributeName},`
    });
      
    componentFileContent += `\n    }: ${casedComponent}Props) => {
      return (`;
      componentFileContent += `\n`;
      componentFileContent += fixtureData.fixtures[0].html.replace('\\','');
      componentFileContent += `\n  );
    }
    
    export default ${casedComponent};`;
    fs.writeFileSync(componentFilePath, componentFileContent);
  }
});
