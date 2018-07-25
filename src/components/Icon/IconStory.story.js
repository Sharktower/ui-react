/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconStory from './IconStory';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Story', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG arrow icon
        `,
        <IconStory />,
        <div>
            <IconStory priority="LOW" />
            <IconStory priority="MEDIUM" />
            <IconStory priority="HIGH" />
            <IconStory blocked />
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
        <IconStory className="demo-icon-story-bigger" />,
        <div>
            <style>
                {
                    `
.demo-icon-story-bigger {
    width: 100px;
    height: 100px;
}
.demo-icon-story-red {
    stroke: #f00;
    fill: #fff;
}
.demo-icon-story-inverted {
    fill: #fff;
}
                    `
                }
            </style>
            <IconStory className="demo-icon-story-red demo-icon-story-bigger" />
            <div style={{ width: 100, background: '#333' }}>
                <IconStory className="demo-icon-story-inverted demo-icon-story-bigger" />
            </div>
        </div>,
    ),
);
