import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Heading, SimpleHighlight, AutoExample } from '../src/components';


storiesOf('Title', module).add('default', () => (
  <>
    <AutoExample component={Heading} />
  </>
));
