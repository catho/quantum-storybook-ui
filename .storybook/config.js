import { configure } from '@storybook/react';

const stories = require.context('../src/stories', false, /.story.jsx?$/);

function loadStories() {
  stories.keys().map(stories);
}

configure(loadStories, module);
