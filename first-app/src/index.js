import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return <h1>This is my first react component</h1>;
};

const root = document.getElementById('root');

ReactDom.render(<Greeting/>, root);
