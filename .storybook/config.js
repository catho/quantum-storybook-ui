import { configure, addDecorator } from '@storybook/react';
import Frame from '../src/decorators/Frame';

const stories = require.context('../src/stories', false, /.story.jsx?$/);

function loadStories() {
  stories.keys().map(stories);
}

addDecorator(Frame);

configure(loadStories, module);
