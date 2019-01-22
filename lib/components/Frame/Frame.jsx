import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import bold from '../../assets/fonts/Montserrat-Bold.ttf';
import light from '../../assets/fonts/Montserrat-Light.ttf';
import regular from '../../assets/fonts/Montserrat-Regular.ttf';

import 'semantic-ui-css/components/checkbox.css';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/form.css';
import 'semantic-ui-css/components/input.css';
import 'semantic-ui-css/components/transition.css';

const Container = styled.div`
  padding: 10px 20px;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('${light}') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('${regular}') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('${bold}') format('truetype');
    font-weight: 700;
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: Montserrat, sans-serif;
  }

  *:focus {
    outline: none;
  }

  pre {
    margin-bottom: 0;
  }

  code {
    background-color: #f6f8fa;
    padding: 2px 5px;
  }

  .highlight {
    padding: 20px !important;
  }

  h1, h4 {
    font-weight: 300;
    margin-top: 40px;
  }

  p {
    font-weight: 300;
    strong {
      font-weight: 400;
    }
  }

  pre {
    margin: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 40px;

    &.bordered {
      th, td {
        border: 1px solid #ccc;
      }
    }

    th, td {
      padding: 8px;
      font-size: 14px;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: #f6f8fa;
    }
  }

  .ui.selection.dropdown,
  .ui.search.selection.dropdown {
    min-width: 11em;
    min-height: 1em;
  }
`;

const Frame = storyFn => (
  <React.Fragment>
    <GlobalStyle />
    <Container>{storyFn()}</Container>
  </React.Fragment>
);

export default Frame;
