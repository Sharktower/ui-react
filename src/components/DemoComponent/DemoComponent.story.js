import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';
import DemoComponent from './DemoComponent';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('DemoComponent', module)
    .add('default',
        withInfo(`
            Default components without props
        `)(() =>
            <DemoComponent></DemoComponent>
        )
    )
    .add('with title', 
        withInfo(`
            With a title prop
        `)(() =>
            <DemoComponent title="Custom title" onClick={action('clicked')}>Content</DemoComponent>
        )
    )
    .add('with some emoji', () => <DemoComponent onClick={action('clicked')}>😀 😎 👍 💯</DemoComponent>);
