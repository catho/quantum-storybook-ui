import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import 'semantic-ui-css/components/checkbox.css';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/form.css';
import 'semantic-ui-css/components/input.css';
import 'semantic-ui-css/components/transition.css';

const Container = styled.div`
  padding: 10px 20px;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

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
