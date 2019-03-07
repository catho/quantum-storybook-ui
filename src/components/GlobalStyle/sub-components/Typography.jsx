import { createGlobalStyle } from 'styled-components';
import Colors from '../../../ui/Colors';

const Typography = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono');
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,400i,600,600i,700,700i');

  body {
    font-family: 'Titillium Web';
    color: ${Colors.blue['bayoux']};
    font-size: 17px;
  }

  h1, h2, h3, h4 {
    color: ${Colors.blue['sanjuan']};
    letter-spacing: -1px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }

  pre {
    margin-bottom: 0;
  }

  code {
    font-family: 'Fira Mono';
    font-size: 12px;
    background-color: #f6f8fa;
    padding: 2px 5px;
  }
`;

export default Typography;
