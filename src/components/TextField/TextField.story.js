import React from 'react';
import { storiesOf } from '@storybook/react';
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
