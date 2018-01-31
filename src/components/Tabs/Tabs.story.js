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
Tabs component

    <Tabs>
        <Tabs.Nav tabsVisible={2}>
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
            <Tabs.Nav tabsVisible={2}>
                <Tabs.Tab>Tab one</Tabs.Tab>
                <Tabs.Tab>Tab two</Tabs.Tab>
                <Tabs.Tab>Tab three</Tabs.Tab>
            </Tabs.Nav>
            <Tabs.Panes>
                <Tabs.Pane>
                    Content 1
                </Tabs.Pane>
                <Tabs.Pane className="test123">
                    Content 2
                    <br />And more content
                </Tabs.Pane>
                <Tabs.Pane>
                    Content 3
                </Tabs.Pane>
            </Tabs.Panes>
        </Tabs>,
        <div>
            <Tabs>
                <Tabs.Nav tabsVisible={3}>
                    <Tabs.Tab>Item one</Tabs.Tab>
                    <Tabs.Tab>Item two</Tabs.Tab>
                    <Tabs.Tab>Item three</Tabs.Tab>
                    <Tabs.Tab>Item four</Tabs.Tab>
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
            <Tabs selectedIndex={1}>
                <Tabs.Nav tabsVisible={2}>
                    <Tabs.Tab>Item one</Tabs.Tab>
                    <Tabs.Tab>Item two</Tabs.Tab>
                    <Tabs.Tab>Item three</Tabs.Tab>
                    <Tabs.Tab>Item four</Tabs.Tab>
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
