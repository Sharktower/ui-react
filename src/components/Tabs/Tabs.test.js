/* global describe, expect, it, mount, shallow */
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Tabs from './Tabs';
import TabsNav from './TabsNav';
import TabsNavItem from './TabsNavItem';
import TabsPane from './TabsPane';

describe('Tabs', () => {
    const defaultTabs = (
        <Tabs>
            <Tabs.Nav>
                <Tabs.NavItem>Item one</Tabs.NavItem>
                <Tabs.NavItem>Item two</Tabs.NavItem>
                <Tabs.NavItem>Item three</Tabs.NavItem>
            </Tabs.Nav>
            <Tabs.Panes>
                <Tabs.Pane>Content one</Tabs.Pane>
                <Tabs.Pane>Content two</Tabs.Pane>
                <Tabs.Pane>Content three</Tabs.Pane>
            </Tabs.Panes>
        </Tabs>
    );

    it('renders an HTML tag div', () => {
        const wrapper = shallow(defaultTabs);

        expect(wrapper).to.have.tagName('div');
    });

    it('renders with class .uir-tabs', () => {
        const wrapper = shallow(defaultTabs);

        expect(wrapper).to.have.className('uir-tabs');
    });

    it('contains correct number of tabs', () => {
        const wrapper = mount(defaultTabs);
        const tabs = wrapper.find(TabsNavItem);

        expect(tabs).to.have.length(3);
    });

    it('contains correct number of panes', () => {
        const wrapper = mount(defaultTabs);
        const panes = wrapper.find(TabsPane);

        expect(panes).to.have.length(3);
    });

    it('renders additional elements', () => {
        const wrapper = shallow((
            <Tabs>
                <Tabs.Nav>
                    <Tabs.NavItem>Item one</Tabs.NavItem>
                </Tabs.Nav>
                <span className="test-span">Test</span>
                <Tabs.Panes>
                    <Tabs.Pane>Content one</Tabs.Pane>
                </Tabs.Panes>
            </Tabs>
        ));

        expect(wrapper).to.contain.html('<span class="test-span">Test</span>');
    });

    it('select first tab by default', () => {
        const wrapper = mount(defaultTabs);
        const selectedPane = wrapper.find('.uir-tabs-pane--selected');
        const selectedTab = wrapper.find(TabsNavItem).filter('[isSelected=true]');

        expect(selectedTab).to.have.length(1);
        expect(selectedTab).to.have.text('Item one');
        expect(selectedPane).to.have.text('Content one');
    });

    describe('onSelectTab', () => {
        it('changes selected tab on click', () => {
            const wrapper = mount(defaultTabs);
            const tab2 = wrapper.find(TabsNavItem).at(1);

            tab2.simulate('click');

            const selectedPane = wrapper.find('.uir-tabs-pane--selecting');
            const selectedTab = wrapper.find(TabsNavItem).filter('[isSelected=true]');
            expect(selectedTab).to.have.text('Item two');
            expect(selectedPane).to.have.text('Content two');
        });

        it('focuses on content', (done) => {
            const wrapper = mount(defaultTabs);
            const tab2 = wrapper.find(TabsNavItem).at(1);
            const pane2 = wrapper.find(TabsPane).at(1);
            const focusSpy = sinon.spy(pane2.instance(), 'focusPane');

            tab2.simulate('click');

            setTimeout(() => {
                expect(focusSpy).to.have.been.called();
                done();
            }, 1000);
        });
    });

    describe('TabsNav', () => {
        it('does not render elements other than TabsNavItem', () => {
            const wrapper = shallow((
                <Tabs>
                    <Tabs.Nav>
                        <Tabs.NavItem>Item one</Tabs.NavItem>
                        <span className="test-span">Test</span>
                        <Tabs.NavItem>Item two</Tabs.NavItem>
                    </Tabs.Nav>
                    <Tabs.Panes>
                        <Tabs.Pane>Content one</Tabs.Pane>
                        <Tabs.Pane>Content two</Tabs.Pane>
                    </Tabs.Panes>
                </Tabs>
            ));
            const nav = wrapper.find(TabsNav);

            expect(nav).not.to.contain.html('<span class="test-span">Test</span>');
        });
    });

    describe('tabsVisible', () => {
        const dropdownTabsTemplate = (
            <Tabs tabsVisible={2}>
                <Tabs.Nav>
                    <Tabs.NavItem>Item one</Tabs.NavItem>
                    <Tabs.NavItem>Item two</Tabs.NavItem>
                    <Tabs.NavItem>Item three</Tabs.NavItem>
                </Tabs.Nav>
                <Tabs.Panes>
                    <Tabs.Pane>Content one</Tabs.Pane>
                    <Tabs.Pane>Content two</Tabs.Pane>
                    <Tabs.Pane>Content three</Tabs.Pane>
                </Tabs.Panes>
            </Tabs>
        );

        it('renders nav dropdown', () => {
            const wrapper = mount(dropdownTabsTemplate);

            expect(wrapper).to.have.descendants('.uir-tabs-nav-dropdown');
        });

        it('leaves specified tabs visible', () => {
            const wrapper = mount(dropdownTabsTemplate);
            const navChildrenTabs = wrapper.find('.uir-tabs-nav').children(TabsNavItem);

            expect(navChildrenTabs).to.have.length(2);
        });

        it('moves tab into dropdown', () => {
            const wrapper = mount(dropdownTabsTemplate);
            const dropdown = wrapper.find('.uir-tabs-nav-dropdown');
            const dropdownTabs = dropdown.find(TabsNavItem);

            expect(dropdownTabs).to.have.length(1);
            expect(dropdownTabs).to.have.text('Item three');
        });

        it('opens dropdown on click', () => {
            const wrapper = mount(dropdownTabsTemplate);
            const trigger = wrapper.find('Button.uir-tabs-nav-dropdown-trigger');

            trigger.simulate('click');
            const dropdown = wrapper.find('.uir-tabs-nav-dropdown');
            expect(dropdown).to.have.className('uir-tabs-nav-dropdown--open');
        });

        it('hides dropdown on interaction outside', () => {
            const wrapper = mount(dropdownTabsTemplate);
            const trigger = wrapper.find('Button.uir-tabs-nav-dropdown-trigger');
            const dropdown = wrapper.find('.uir-tabs-nav-dropdown');
            const outsideTab = wrapper.find(TabsNavItem).at(0);
            // eslint-disable-next-line react/no-find-dom-node
            const outsideTabNode = ReactDOM.findDOMNode(outsideTab.instance());
            const syntheticEvent = { relatedTarget: outsideTabNode };

            trigger.simulate('click');
            dropdown.simulate('blur', syntheticEvent);
            expect(dropdown).not.to.have.className('uir-tabs-nav-dropdown--open');
        });

        it('hides dropdown on interaction outside - IE11', () => {
            const wrapper = mount(dropdownTabsTemplate);
            const trigger = wrapper.find('Button.uir-tabs-nav-dropdown-trigger');
            const dropdown = wrapper.find('.uir-tabs-nav-dropdown');
            const syntheticEvent = { relatedTarget: null };

            trigger.simulate('click');
            // IE11 relies on document.activeElement and we're not able to control that from here.
            // So just test the blur event with relatedTarget as null
            // (the default document.activeElement is the <body>, so the dropdown should hide)
            dropdown.simulate('blur', syntheticEvent);
            expect(dropdown).not.to.have.className('uir-tabs-nav-dropdown--open');
        });

        it('does not hide dropdown on interaction inside', () => {
            const wrapper = mount(dropdownTabsTemplate);
            const trigger = wrapper.find('Button.uir-tabs-nav-dropdown-trigger');
            const dropdown = wrapper.find('.uir-tabs-nav-dropdown');
            const dropdownTab = dropdown.find(TabsNavItem).at(0);
            const dropdownTabNode = dropdownTab.getDOMNode();
            const syntheticEvent = { relatedTarget: dropdownTabNode };

            trigger.simulate('click');
            dropdown.simulate('blur', syntheticEvent);
            expect(dropdown).to.have.className('uir-tabs-nav-dropdown--open');
        });
    });

    describe('Tab isDisabled', () => {
        it('does not make tab button disabled by default', () => {
            const wrapper = mount(defaultTabs);
            const tab2 = wrapper.find(TabsNavItem).at(1);
            const button = tab2.find('Button');

            expect(button).not.to.have.prop('isDisabled', true);
        });

        it('makes tab button disabled', () => {
            const wrapper = mount((
                <Tabs>
                    <Tabs.Nav>
                        <Tabs.NavItem>Item one</Tabs.NavItem>
                        <Tabs.NavItem isDisabled>Item two</Tabs.NavItem>
                    </Tabs.Nav>
                    <Tabs.Panes>
                        <Tabs.Pane>Content one</Tabs.Pane>
                        <Tabs.Pane>Content two</Tabs.Pane>
                    </Tabs.Panes>
                </Tabs>
            ));
            const tab2 = wrapper.find(TabsNavItem).at(1);
            const button = tab2.find('Button');

            expect(button).to.have.prop('isDisabled', true);
        });
    });
});
