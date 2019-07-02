import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, LivePreview } from '../src/components';
import Button from './Button';
import Card from './Card';

const description = `Buttons express what action will occur when the user clicks
or touches it. Buttons are used to initialize an action, either in the
background or foreground of an experience.
`;

const CardExample = () => (
  <Card>
    <Card.Header>
      <Card.Thumbnail src='http://i.pravatar.cc/72' alt='Avatar' />
      <Card.HeaderText>
        <Card.Title small>Title</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
      </Card.HeaderText>
    </Card.Header>
    <Card.Media src='http://placekitten.com/g/800' alt='A beautiful Cat' />
    <Card.Content>
      Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
      metus elit. In hac habitasse platea dictumst. Fusce non purus a dui semper
      molestie vitae in sapien. In a odio quis nisi placerat varius eget et
      magna. Donec nec cursus mauris. Donec a cursus velit.
    </Card.Content>
    <Card.Footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div>
        <Button size='small' skin='secondary'>
          See more
        </Button>
      </div>
      <div />
    </Card.Footer>
  </Card>
);

storiesOf('Button', module).add('default', () => (
  <LivePreview
    component={
      <Card>
        <Card.Header>
          <Card.Thumbnail src='http://i.pravatar.cc/72' alt='Avatar' />
          <Card.HeaderText>
            <Card.Title small>Title</Card.Title>
            <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
          </Card.HeaderText>
        </Card.Header>
        <Card.Media src='http://placekitten.com/g/800' alt='A beautiful Cat' />
        <Card.Content>
          Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
          metus elit. In hac habitasse platea dictumst. Fusce non purus a dui
          semper molestie vitae in sapien. In a odio quis nisi placerat varius
          eget et magna. Donec nec cursus mauris. Donec a cursus velit.
        </Card.Content>
        <Card.Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <Button size='small' skin='secondary'>
              See more
            </Button>
          </div>
          <div />
        </Card.Footer>
      </Card>
    }
    onChange={() => {}}
    state={{}}
  />
));
