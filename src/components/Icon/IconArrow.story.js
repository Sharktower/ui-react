/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import IconArrow from './IconArrow';

const stories = storiesOf('IconArrow', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    'Overview',
    withInfo(`
        Adjust props in the Knob panel of Storybook
    `)(() => (
        <IconArrow
            onClick={action('clicked')}
            className={text('className', '')}
        />
    )),
);

stories.add(
    'Style',
    withInfo(`
        Use CSS to style the icon
    `)(() => (
        <div>
            <style>
                {
                    `.demo-icon-arrow-bigger {
                        width: 100px;
                        height: 100px;
                    }`
                }
            </style>
            <IconArrow className="demo-icon-arrow-bigger" />
            <style>
                {
                    `.demo-icon-arrow-light {
                        fill: #fff;
                    }`
                }
            </style>
            <div style={{ width: 100, background: '#333' }}>
                <IconArrow className="demo-icon-arrow-light demo-icon-arrow-bigger" />
            </div>
        </div>
    )),
);
