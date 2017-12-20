/* global describe, expect, it, mount  */
import React from 'react';
import PropTypes from 'prop-types';
import overviewWrapper from './overviewWrapper';

const MockComponent = props => (<div>{props.name}</div>);
MockComponent.propTypes = {
    name: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};
MockComponent.defaultProps = {
    name: '',
};

function prepareWrapper() {
    const hoc = overviewWrapper(
        'My summary',
        <MockComponent name="example" />,
        <div>
            <MockComponent name="example" />
        </div>,
    );
    const storyContextMock = { kind: 'Foo', story: 'Bar' };
    return mount(hoc(storyContextMock));
}

describe('overviewWrapper', () => {
    it('renders our logo', () => {
        const wrapper = prepareWrapper();
        expect(wrapper.find('svg').length).to.equal(1);
    });

    it('renders a heading', () => {
        const wrapper = prepareWrapper();
        expect(wrapper.find('h1').text()).to.equal('Foo');
    });

    it('renders a sub heading', () => {
        const wrapper = prepareWrapper();
        expect(wrapper.find('h2').text()).to.equal('Bar');
    });

    it('renders the summary', () => {
        const wrapper = prepareWrapper();
        expect(wrapper.find('p').text()).to.equal('My summary');
    });

    it('renders an example heading', () => {
        const wrapper = prepareWrapper();
        expect(wrapper.find('h3').text()).to.equal('Basic Example');
    });
});
