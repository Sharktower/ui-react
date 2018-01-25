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
        `,
        <Tabs>
            <Tabs.Nav tabsVisible={3}>
                <Tabs.Tab>Item one</Tabs.Tab>
                <Tabs.Tab>Item two</Tabs.Tab>
                <Tabs.Tab>Item three</Tabs.Tab>
                <Tabs.Tab>Item four</Tabs.Tab>
            </Tabs.Nav>
            <Tabs.Panes>
                <Tabs.Pane>
                    Content1
                </Tabs.Pane>
                <Tabs.Pane>
                    Content2
                </Tabs.Pane>
                <Tabs.Pane>
                    Content3
                </Tabs.Pane>
                <Tabs.Pane>
                    Content4
                </Tabs.Pane>
            </Tabs.Panes>
        </Tabs>,
        <div>
            <Tabs activeIndex={1}>
                <Tabs.Nav tabsVisible={2}>
                    <Tabs.Tab>Item one</Tabs.Tab>
                    <Tabs.Tab>Item two</Tabs.Tab>
                    <Tabs.Tab>Item three</Tabs.Tab>
                    <Tabs.Tab>Item four</Tabs.Tab>
                </Tabs.Nav>
                <Tabs.Panes>
                    <Tabs.Pane>
                        Content1
                    </Tabs.Pane>
                    <Tabs.Pane>
                        Content2
                    </Tabs.Pane>
                    <Tabs.Pane>
                        Content3
                    </Tabs.Pane>
                    <Tabs.Pane>
                        Content4
                    </Tabs.Pane>
                </Tabs.Panes>
            </Tabs>
        </div>,
    ),
);
