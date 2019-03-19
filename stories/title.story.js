import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, AutoExample } from '../src/components';


storiesOf('Title', module).add('default', () => (
  <>
    <AutoExample component={Heading} />
  </>
));
