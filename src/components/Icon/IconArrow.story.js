/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconArrow from './IconArrow';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('IconArrow', module);

stories
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    'Overview',
    storyWrapper(
        `
Adjust props in the Knob panel of Storybook
        `,
        <IconArrow />,
    ),
);

stories.add(
    'Style',
    storyWrapper(
        `
Use CSS to style the icon
        `,
        <IconArrow className="demo-icon-arrow-bigger" />,
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
        </div>,
    ),
);
