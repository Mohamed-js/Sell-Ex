import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', ({ products }) => {
  ReactDOM.render(
    <App products={'hey'} />,
    document.body.appendChild(document.createElement('div'))
  );
});
