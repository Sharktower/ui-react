import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import TooltipBox from './TooltipBox';

const stories = storiesOf('Tooltip.TooltipBox', module);

stories.add(
    'Standard',
    storyWrapper(
        `
TooltipBox component provides default tooltip styling for use with Tooltip

_NB: any component can be used as a tooltip, this is just a handy util component_
`,
        <TooltipBox style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
            <div>My Tooltip Contents</div>
        </TooltipBox>,
    ),
);

stories.add(
    'Success',
    storyWrapper(
        'Pass "success" to the `status` prop to change to the success state.',
        <TooltipBox status="success" style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
            <div>My Tooltip Contents</div>
        </TooltipBox>,
    ),
);

stories.add(
    'Error',
    storyWrapper(
        'Pass "error" to the `status` prop to change to the error state.',
        <TooltipBox status="error" style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
            <div>My Tooltip Contents</div>
        </TooltipBox>,
    ),
);
