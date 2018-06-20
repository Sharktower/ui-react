/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconCalendar from './IconCalendar';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Calendar', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG calendar icon
        `,
        <IconCalendar />,
    ),
);

stories.add(
    'Style',
    storyWrapper(
        `
Use CSS to style the icon, we recommend using classes.

It uses an SVG image.
You can modify properties such as <code>width</code>, <code>height</code>, <code>fill</code> and <code>stroke</code>
        `,
        <IconCalendar className="demo-icon-calendar-bigger" />,
        <div>
            <style>
                {
                    `
.demo-icon-calendar-bigger {
    width: 100px;
    height: 100px;
}
.demo-icon-calendar-red .uir-icon-path-fill { fill: #f00; }
.demo-icon-calendar-inverted .uir-icon-path-fill {
    fill: #fff;
}
                    `
                }
            </style>
            <IconCalendar className="demo-icon-calendar-red demo-icon-calendar-bigger" />
            <div style={{ width: 100, background: '#333' }}>
                <IconCalendar className="demo-icon-calendar-inverted demo-icon-calendar-bigger" />
            </div>
        </div>,
    ),
);
