/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconArrow from './IconArrow';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Arrow', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG arrow icon
        `,
        <IconArrow />,
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
        <IconArrow className="demo-icon-arrow-bigger" />,
        <div>
            <style>
                {
                    `
.demo-icon-arrow-bigger {
    width: 100px;
    height: 100px;
}
.demo-icon-arrow-red {
    stroke: #f00;
    fill: #fff;
}
.demo-icon-arrow-inverted {
    fill: #fff;
}
                    `
                }
            </style>
            <IconArrow className="demo-icon-arrow-red demo-icon-arrow-bigger" />
            <div style={{ width: 100, background: '#333' }}>
                <IconArrow className="demo-icon-arrow-inverted demo-icon-arrow-bigger" />
            </div>
        </div>,
    ),
);
