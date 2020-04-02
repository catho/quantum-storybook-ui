import React from 'react';
import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 0 90px 0;
  }

  pre {
    margin-bottom: 0;
  }

  code {
    background-color: #f6f8fa;
    display: inline-block;
    font-family: 'Fira Mono';
    font-size: 12px;
    line-height: 2.5;
    padding: 2px 5px;
  }
`;

const Ui = () => (
  <>
    <Style />
    <link href="https://fonts.googleapis.com/css?family=Fira+Mono" rel="stylesheet" />
  </>
);

export default Ui;
