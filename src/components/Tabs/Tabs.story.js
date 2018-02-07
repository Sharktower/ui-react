/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from './Tabs';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Tabs', module);

stories.add(
    'Overview',
    storyWrapper(
        `
Tabs component allows toggling between multiple content panes.

    <Tabs>
        <Tabs.Nav>
            <Tabs.Tab>Tab one</Tabs.Tab>
            <Tabs.Tab>Tab two</Tabs.Tab>
            <Tabs.Tab>Tab three</Tabs.Tab>
        </Tabs.Nav>
        <Tabs.Panes>
            <Tabs.Pane>
                Content 1
            </Tabs.Pane>
            <Tabs.Pane>
                Content 2
            </Tabs.Pane>
            <Tabs.Pane>
                Content 3
            </Tabs.Pane>
        </Tabs.Panes>
    </Tabs>
        `,
        <Tabs>
            <Tabs.Nav>
                <Tabs.Tab>Tab one</Tabs.Tab>
                <Tabs.Tab>Tab two</Tabs.Tab>
                <Tabs.Tab>Tab three</Tabs.Tab>
            </Tabs.Nav>
            <Tabs.Panes>
                <Tabs.Pane>
                    Content 1
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 2
                    <br />And more content
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 3
                </Tabs.Pane>
            </Tabs.Panes>
        </Tabs>,
    ),
);

stories.add(
    'Disabled',
    storyWrapper(
        `
To disable a tab, add <code>isDisabled</code> prop to the <code><Tabs.Tab></code> component.

    <Tabs>
        <Tabs.Nav>
            <Tabs.Tab>Tab one</Tabs.Tab>
            <Tabs.Tab isDisabled>Tab two</Tabs.Tab>
            <Tabs.Tab>Tab three</Tabs.Tab>
        </Tabs.Nav>
        <Tabs.Panes>
            <Tabs.Pane>
                Content 1
            </Tabs.Pane>
            <Tabs.Pane>
                Content 2
            </Tabs.Pane>
            <Tabs.Pane>
                Content 3
            </Tabs.Pane>
        </Tabs.Panes>
    </Tabs>
        `,
        <Tabs>
            <Tabs.Nav>
                <Tabs.Tab>Tab one</Tabs.Tab>
                <Tabs.Tab isDisabled>Tab two</Tabs.Tab>
                <Tabs.Tab>Tab three</Tabs.Tab>
            </Tabs.Nav>
            <Tabs.Panes>
                <Tabs.Pane>
                    Content 1
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 2
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 3
                </Tabs.Pane>
            </Tabs.Panes>
        </Tabs>,
    ),
);

stories.add(
    'Preselected',
    storyWrapper(
        `
Use the (zero-based) <code>selectedIndex</code> prop to preselect a tab on load.

    <Tabs selectedIndex={1}>
        <Tabs.Nav>
            <Tabs.Tab>Tab one</Tabs.Tab>
            <Tabs.Tab>Tab two</Tabs.Tab>
            <Tabs.Tab>Tab three</Tabs.Tab>
        </Tabs.Nav>
        <Tabs.Panes>
            <Tabs.Pane>
                Content 1
            </Tabs.Pane>
            <Tabs.Pane>
                Content 2
            </Tabs.Pane>
            <Tabs.Pane>
                Content 3
            </Tabs.Pane>
        </Tabs.Panes>
    </Tabs>
        `,
        <Tabs selectedIndex={1}>
            <Tabs.Nav>
                <Tabs.Tab>Tab one</Tabs.Tab>
                <Tabs.Tab>Tab two</Tabs.Tab>
                <Tabs.Tab>Tab three</Tabs.Tab>
            </Tabs.Nav>
            <Tabs.Panes>
                <Tabs.Pane>
                    Content 1
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 2
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 3
                </Tabs.Pane>
            </Tabs.Panes>
        </Tabs>,
    ),
);

stories.add(
    'With a dropdown',
    storyWrapper(
        `
<code>tabsVisible</code> prop controls which tabs are always visible and which should be moved into a dropdown.

    <Tabs tabsVisible={2}>
        <Tabs.Nav>
            <Tabs.Tab>Tab one</Tabs.Tab>
            <Tabs.Tab>Tab two</Tabs.Tab>
            <Tabs.Tab>Tab three</Tabs.Tab>
        </Tabs.Nav>
        <Tabs.Panes>
            ...
        </Tabs.Panes>
    </Tabs>
        `,
        <Tabs tabsVisible={2}>
            <Tabs.Nav>
                <Tabs.Tab>Tab one</Tabs.Tab>
                <Tabs.Tab>Tab two</Tabs.Tab>
                <Tabs.Tab>Tab three</Tabs.Tab>
            </Tabs.Nav>
            <Tabs.Panes>
                <Tabs.Pane>
                    Content 1
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 2
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 3
                </Tabs.Pane>
            </Tabs.Panes>
        </Tabs>,
        <div>
            <Tabs tabsVisible={1}>
                <Tabs.Nav>
                    <Tabs.Tab>Tab one</Tabs.Tab>
                    <Tabs.Tab>Tab two</Tabs.Tab>
                    <Tabs.Tab>Tab three</Tabs.Tab>
                    <Tabs.Tab>Tab four</Tabs.Tab>
                </Tabs.Nav>
                <Tabs.Panes>
                    <Tabs.Pane>
                        Content 1
                    </Tabs.Pane>
                    <Tabs.Pane>
                        Content 2
                    </Tabs.Pane>
                    <Tabs.Pane>
                        Content 3
                    </Tabs.Pane>
                    <Tabs.Pane>
                        Content 4
                    </Tabs.Pane>
                </Tabs.Panes>
            </Tabs>
        </div>,
    ),
);
