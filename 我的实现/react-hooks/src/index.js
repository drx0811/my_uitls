
import React from 'react';
import ReactDOM from 'react-dom';
import UseStateFn from './useState'
function RenderFn() {
  ReactDOM.render(
    <UseStateFn RenderFn={RenderFn} />,
    document.getElementById('root')
  );
}
RenderFn();



