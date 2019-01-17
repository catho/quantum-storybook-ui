import React from 'react';
import { storiesOf } from '@storybook/react';

import { Title } from '../lib/components';

storiesOf('Title', module).add('default', () => (
  <Title>Quantum storybook UI</Title>
));
