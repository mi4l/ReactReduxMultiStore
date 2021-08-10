import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryApp } from './PrimaryApplication';
import { ExternalApp } from './ExternalApplication';

ReactDOM.render(
  <PrimaryApp ExternalApp={ExternalApp} />,
  document.getElementById('Root')
);
