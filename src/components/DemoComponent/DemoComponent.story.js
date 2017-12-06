import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DemoComponent from './DemoComponent';

const stories = storiesOf('DemoComponent', module);

stories
  .addDecorator(story => (
    <div id="ui-root-preview">
      {story()}
    </div>
  ));

stories.add('default', 
    withInfo(`
        Default components without props
    `)(() =>
        <DemoComponent></DemoComponent>
    )
);
stories.add('with title', 
    withInfo(`
        With a custom title
    `)(() =>
        <DemoComponent title="Custom title" onClick={action('clicked')}>Extra content here</DemoComponent>
    )
);
stories.add('with emoji', withInfo()(() =>
    <DemoComponent onClick={action('clicked')}>😀 😎 👍 💯</DemoComponent>
));