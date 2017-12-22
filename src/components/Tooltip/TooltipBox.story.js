import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import TooltipBox from './TooltipBox';

const stories = storiesOf('Tooltip.TooltipBox', module);

stories.add(
    'Standard',
    storyWrapper(
        'Standard tooltip box component',
        <TooltipBox style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
            <div>My Tooltip Contents</div>
        </TooltipBox>,
    ),
);

stories.add(
    'Success',
    storyWrapper(
        'Success tooltip box component',
        <TooltipBox status="success" style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
            <div>My Tooltip Contents</div>
        </TooltipBox>,
    ),
);

stories.add(
    'Error',
    storyWrapper(
        'Error tooltip box component',
        <TooltipBox status="error" style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
            <div>My Tooltip Contents</div>
        </TooltipBox>,
    ),
);
