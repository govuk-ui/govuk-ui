import{j as n,F as o}from"./jsx-runtime-670450c2.js";import{r as s}from"./index-f1f749bf.js";const r=({fireAfter:e})=>(s.useEffect(()=>{if(!e)setTimeout(()=>{window.GOVUKFrontend.initAll()},100);else if(document.getElementById(e))window.GOVUKFrontend.initAll();else{const t=new MutationObserver(()=>{document.getElementById(e)&&(t.disconnect(),window.GOVUKFrontend.initAll())});return t.observe(document,{subtree:!0,childList:!0}),()=>t.disconnect()}},[]),n(o,{}));r.__docgenInfo={description:`This component is used to hydrate the govuk-frontend javascript components when the page is loaded.
This is needed as Storybook uses iframes to render the components so running the js in the head
of the document means components haven't rendered by the time the js tries to run.
This component needs to be added to the story file for each component that uses the govuk-frontend js.

@param {string} fireAfter - The id of the component to wait for before running the js.`,methods:[],displayName:"GovScript"};export{r as G};
//# sourceMappingURL=GovScript-6b99b831.js.map
