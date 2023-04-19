import React, { useEffect } from 'react';

/**
 * This component is used to hydrate the govuk-frontend javascript components when the page is loaded.
 * This is needed as Storybook uses iframes to render the components so running the js in the head
 * of the document means components haven't rendered by the time the js tries to run.
 * This component needs to be added to the story file for each component that uses the govuk-frontend js.
 *
 * @param {string} fireAfter - The id of the component to wait for before running the js.
 */
export const GovScript = ({ fireAfter }) => {
  useEffect(() => {
    if (!fireAfter) {
      setTimeout(() => {
        window.GOVUKFrontend.initAll();
      }, 100)
    } else {
      const componentLoaded = document.getElementById(fireAfter);
      if (componentLoaded) {
        window.GOVUKFrontend.initAll();
      } else {
        const observer = new MutationObserver(() => {
          const componentLoaded = document.getElementById(fireAfter);
          if (componentLoaded) {
            observer.disconnect();
            window.GOVUKFrontend.initAll();
          }
        });
        observer.observe(document, { subtree: true, childList: true });

        return () => observer.disconnect();
      }
    }
  }, [])

  return (
    <></>
  );
}
