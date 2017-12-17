import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
import Avatar from './Avatar';

const stories = storiesOf('Avatar', module);

stories.add(
    'simple info',
    withInfo(`
        description or documentation about my component, supports markdown

        ~~~js
        <Avatar name="Matthew Davies" initials="MD" />
        ~~~
    `)(() => <Avatar name="Matthew Davies" initials="MD" />),
);
