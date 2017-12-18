/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import IconArrow from './IconArrow';

const stories = storiesOf('IconArrow', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    '-demo-',
    withInfo(`
        Adjust props in the Knob panel of Storybook
    `)(() => (
        <IconArrow
            onClick={action('clicked')}
            className={text('className', '')}
            width={number('width', 24)}
            height={number('height', 24)}
        />
    )),
);

stories.add(
    'bigger',
    withInfo(`
        Assign width and height 
    `)(() => <IconArrow width="100" height="100" />),
);

stories.add(
    'white',
    withInfo(`
        Using style attribute
    `)(() => (
        <div style={{ background: '#333' }}>
            <IconArrow width="100" height="100" style={{ marginTop: '-3px', stroke: '#FFF' }} />
        </div>
    )),
);
