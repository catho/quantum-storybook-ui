import { configure, addDecorator } from '@storybook/react';
import UiStyle from '../src/components/UiStyle';

addDecorator(UiStyle);
const stories = require.context('../stories', false, /.story.jsx?$/);

function loadStories() {
  stories.keys().map(stories);
}

configure(loadStories, module);

