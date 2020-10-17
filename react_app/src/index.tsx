import * as React from 'react';
import * as ReactDom from 'react-dom';

console.log('Hello Taipscript');

const rootElementID = "app";

console.log(rootElementID);

const element = <h2>HAllo React</h2>;
ReactDom.render(
  element,
  document.getElementById(rootElementID)
);
