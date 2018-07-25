/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconTask from './IconTask';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Task', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG task icon
        `,
        <IconTask />,
        <div>
            <IconTask priority="LOW" />
            <IconTask priority="MEDIUM" />
            <IconTask priority="HIGH" />
            <IconTask blocked />
        </div>,
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
        <IconTask className="demo-icon-task-bigger" />,
        <div>
            <style>
                {
                    `
.demo-icon-task-bigger {
    width: 100px;
    height: 100px;
}
.demo-icon-task-red {
    stroke: #f00;
    fill: #fff;
}
.demo-icon-task-inverted {
    fill: #fff;
}
                    `
                }
            </style>
            <IconTask className="demo-icon-task-red demo-icon-task-bigger" />
            <div style={{ width: 100, background: '#333' }}>
                <IconTask className="demo-icon-task-inverted demo-icon-task-bigger" />
            </div>
        </div>,
    ),
);
