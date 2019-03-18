import { createGlobalStyle } from 'styled-components';

import 'semantic-ui-css/components/checkbox.css';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/form.css';
import 'semantic-ui-css/components/input.css';
import 'semantic-ui-css/components/transition.css';

const Ui = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 0 90px 0;
  }

  .ui.selection.dropdown,
  .ui.search.selection.dropdown {
    min-width: 11em;
    min-height: 1em;
  }
`;

export default Ui;
