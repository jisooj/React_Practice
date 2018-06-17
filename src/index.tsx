import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Comment from './components/Comment';
import Board from './components/Board';
import './index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Board />,
  document.getElementById('root') as HTMLElement
);


registerServiceWorker();
