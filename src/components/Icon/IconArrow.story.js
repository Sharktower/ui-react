/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import IconArrow from './IconArrow';

const stories = storiesOf('IconArrow', module);

stories
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    'default',
    withInfo(`
        With a custom title
    `)(() => (
        <IconArrow />
    )),
);

stories.add(
    'with double width',
    withInfo(`
        With double width
    `)(() => <IconArrow width="30" />),
);

stories.add(
    'with double width & height',
    withInfo(`
        With double width and height
    `)(() => <IconArrow width="30" height="30" />),
);
