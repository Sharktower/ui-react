import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import TextField from './TextField';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('TextField.TextField', module);

stories.add(
    'Overview',
    storyWrapper(
        'TextField is text input field.',
        <TextField label="TextField" />,
    ),
);

stories.add(
    'Placholder',
    storyWrapper(
        'Placholder will appear when the input has focus.',
        <TextField label="TextField" placeholder="your placeholder here" />,
    ),
);

stories.add(
    'Value',
    storyWrapper(
        'Value allows you to set an initial value.',
        <TextField
            label="TextField"
            placeholder="your placeholder here"
            value="Hello, Friend"
        />,
    ),
);
