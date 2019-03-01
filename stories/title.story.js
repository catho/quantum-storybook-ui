import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, SimpleHighlight } from '../src/components';

const registry = 'registry="http://armazem.devel:4873/"';

const codeBackgroundColor = '#e8f2fc';
const codefontColor = '#1a82e2';

storiesOf('Title', module).add('default', () => (
  <>
    <Heading title="Quantum">
      CSS in JS based reusable components, are the core of Quantum design-system: a
      library for developing consistent UI/UX at Catho.
    </Heading>

  </>
));
