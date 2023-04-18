import React from 'react';
export class GovScript extends React.Component {
  componentDidMount = () => {
    const storybookDiv = document.querySelector('[data-module]');
    if (storybookDiv) {
      window.GOVUKFrontend.initAll();
    } else {
      this.observer = new MutationObserver(() => {
        const storybookDiv = document.querySelector('[data-module]');
        if (storybookDiv) {
          this.removeObserver();
          window.GOVUKFrontend.initAll();
        }
      });
      this.observer.observe(document, { subtree: true, childList: true });
    }
  }

  componentWillUnmount = () => {
    this.removeObserver();
  }

  removeObserver = () => {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  render() {
    return (
      <></>
    );
  }
}
