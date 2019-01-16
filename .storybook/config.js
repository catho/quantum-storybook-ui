import { configure, addDecorator } from '@storybook/react';
import Frame from '../lib/components/Frame';

const stories = require.context('../lib/stories', false, /.story.jsx?$/);

function loadStories() {
  stories.keys().map(stories);
}

addDecorator(Frame);

configure(loadStories, module);
