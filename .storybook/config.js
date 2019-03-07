import { configure, addDecorator } from '@storybook/react';

const stories = require.context('../stories', false, /.story.jsx?$/);

function loadStories() {
  stories.keys().map(stories);
}

configure(loadStories, module);
