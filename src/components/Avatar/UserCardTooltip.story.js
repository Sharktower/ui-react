import React from 'react';
import { storiesOf } from '@storybook/react';
import UserCardTooltip from './UserCardTooltip';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Avatar.UserCardTooltip', module);

stories.add(
    'Tooltip',
    storyWrapper(
        `The UserCardTooltip is primarily to be used inside a UserCard.

You can place anything you like inside the component as long as it is JSX.
        `,
        (
            <UserCardTooltip style={{ position: 'relative', transform: 'translate(0, 0)', animationName: 'none' }}>
                <div>My Tooltip Contents</div>
            </UserCardTooltip>
        ),
    ),
);
