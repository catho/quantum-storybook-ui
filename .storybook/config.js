import { configure, addDecorator } from '@storybook/react';
import Frame from '../src/components/Frame';

const stories = require.context('../stories', false, /.story.jsx?$/);

function loadStories() {
  stories.keys().map(stories);
}

addDecorator(Frame);

configure(loadStories, module);
