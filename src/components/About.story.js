import { storiesOf } from '@storybook/react';
import overviewWrapper from '../storybook-addons/overviewWrapper';

const stories = storiesOf('About', module);

stories.add(
    'Welcome',
    overviewWrapper(`
This is my example introduction...

More code will go here!
    `),
);
