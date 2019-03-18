import { configure, addDecorator } from '@storybook/react';
import GlobalStyle from '../src/components/GlobalStyle';

addDecorator(GlobalStyle);
const stories = require.context('../stories', false, /.story.jsx?$/);

function loadStories() {
  stories.keys().map(stories);
}

configure(loadStories, module);
