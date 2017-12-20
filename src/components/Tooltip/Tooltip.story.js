import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../Tooltip/Tooltip';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Tooltip', module);

stories.add(
    'Tooltip',
    storyWrapper(
        'Simple tooltip component',
        (
            <Tooltip style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
                <div>My Tooltip Contents</div>
            </Tooltip>
        ),
    ),
);
