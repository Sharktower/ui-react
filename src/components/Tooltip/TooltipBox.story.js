import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import TooltipBox from './TooltipBox';

const stories = storiesOf('Tooltip', module);

stories.add(
    'TooltipBox',
    storyWrapper(
        'Simple tooltip box component',
        <TooltipBox style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
            <div>My Tooltip Contents</div>
        </TooltipBox>,
    ),
);
