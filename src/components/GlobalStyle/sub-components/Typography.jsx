import { createGlobalStyle } from 'styled-components';
import Colors from '../../../ui/Colors';

const Typography = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,600i,700');

  body {
    font-family: 'Nunito Sans', sans-serif;
    color: ${Colors.blue['bayoux']};
    font-size: 17px;
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

export default Typography;
