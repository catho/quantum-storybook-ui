import React from 'react';
import Ui from './sub-components/Ui';
import { GlobalStyle } from '@catho/quantum';

const UiStyle = storyFn => (
  <>
    <GlobalStyle />
    <Ui />
    {storyFn()}
  </>
);

export default UiStyle;
