import React from 'react';
import Typography from './sub-components/Typography';
import Ui from './sub-components/Ui';

const GlobalStyle = storyFn => (
  <>
    <Typography />
    <Ui />
    {storyFn()}
  </>
);

export default GlobalStyle;
