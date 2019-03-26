import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '../src/components';
import Button from './Button';

const description = `Buttons express what action will occur when the user clicks
or touches it. Buttons are used to initialize an action, either in the
background or foreground of an experience.
`;

storiesOf('Button', module).add('default', () => (
  <>
    <AutoExample
      description={description}
      component={Button}
      componentProps={{ children: 'Catho' }}
    />
  </>
));
