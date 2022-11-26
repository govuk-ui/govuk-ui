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

  // type file
  const typeFilePath = path.resolve(componentPath, `${casedComponent}.types.ts`);
  if (!fs.existsSync(typeFilePath)) {
    console.log(`... writing types file for ${casedComponent} component`);
    const typeFileContent = `
    export default interface ${casedComponent}Props {
      name?: string,
    }`;
    fs.writeFileSync(typeFilePath, typeFileContent);
  }

  // component file
  const componentFilePath = path.resolve(componentPath, `${casedComponent}.tsx`);
  if (!fs.existsSync(componentFilePath)) {
    console.log(`... writing component file for ${casedComponent} component`);
    const componentFileContent = `
    import React from 'react';
    import ${casedComponent}Props from './${casedComponent}.types';
    
    export const ${casedComponent} = ({
      name,
    }: ${casedComponent}Props) => {
      return (
        <div>
          Component Not Implemented
        </div>
      );
    }
    
    export default ${casedComponent};`;
    fs.writeFileSync(componentFilePath, componentFileContent);
  }
});
