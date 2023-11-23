
import React from 'react';
import ReactDOM from 'react-dom';
import UseStateFn from './useState'
import UseEffectFn from './UseEffect'
import UseSetStateFn from './UseSetState'

function RenderFn() {
  ReactDOM.render(
    <UseStateFn RenderFn={RenderFn} />,
    // <UseEffectFn RenderFn={RenderFn} />,
    // <UseSetStateFn RenderFn={RenderFn} />,
    document.getElementById('root')
  );
}
RenderFn();



