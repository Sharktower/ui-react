/* global describe, expect, it, shallow  */
import React from 'react';
import PropTypes from 'prop-types';
import InitialsPropType from '../prop-types/initials';
import {
    Logo,
    markdown,
    getProps,
    getSourceCode,
    getVariations,
    getKind,
} from './utils';

const MockComponent = props => (<div>{props.name}</div>);
MockComponent.propTypes = {
    name: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};
MockComponent.defaultProps = {
    name: '',
};

describe('Storybook Utils', () => {
    it('logo renders a svg', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper.find('svg').length).to.equal(1);
    });

    it('markdown converts string to html', () => {
        const wrapper = shallow(markdown.convert('this is *some markdown*'));
        expect(wrapper.find('p').length).to.equal(1);
    });

    it('getProps can create props table', () => {
        const propTypes = {
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            foo: PropTypes.bool,
            bar: PropTypes.bool,
            fn: PropTypes.func,
            example: PropTypes.string,
            initials: InitialsPropType,
        };
        const defaultProps = {
            description: null,
            foo: true,
            bar: false,
            fn: () => {},
            example: 'hello world',
            initials: null,
        };
        const wrapper = shallow(getProps(propTypes, defaultProps));
        expect(wrapper.find('table').length).to.equal(1);
        // check heading
        expect(wrapper.find('h3').text()).to.equal('Props');
        // check table headings
        expect(wrapper.find('th').at(0).text()).to.equal('property');
        expect(wrapper.find('th').at(1).text()).to.equal('type');
        expect(wrapper.find('th').at(2).text()).to.equal('required');
        expect(wrapper.find('th').at(3).text()).to.equal('default');
        // check table row one
        expect(wrapper.find('td').at(0).text()).to.equal('name');
        expect(wrapper.find('td').at(1).text()).to.equal('string');
        expect(wrapper.find('td').at(2).text()).to.equal('yes');
        expect(wrapper.find('td').at(3).text()).to.equal('-');
        // check table row two
        expect(wrapper.find('td').at(4).text()).to.equal('description');
        expect(wrapper.find('td').at(5).text()).to.equal('string');
        expect(wrapper.find('td').at(6).text()).to.equal('no');
        expect(wrapper.find('td').at(7).text()).to.equal('null');
        // check table row three
        expect(wrapper.find('td').at(8).text()).to.equal('foo');
        expect(wrapper.find('td').at(9).text()).to.equal('bool');
        expect(wrapper.find('td').at(10).text()).to.equal('no');
        expect(wrapper.find('td').at(11).text()).to.equal('true');
        // check table row four
        expect(wrapper.find('td').at(12).text()).to.equal('bar');
        expect(wrapper.find('td').at(13).text()).to.equal('bool');
        expect(wrapper.find('td').at(14).text()).to.equal('no');
        expect(wrapper.find('td').at(15).text()).to.equal('false');
        // check table row five
        expect(wrapper.find('td').at(16).text()).to.equal('fn');
        expect(wrapper.find('td').at(17).text()).to.equal('func');
        expect(wrapper.find('td').at(18).text()).to.equal('no');
        expect(wrapper.find('td').at(19).text()).to.equal('func');
        // check table row six
        expect(wrapper.find('td').at(20).text()).to.equal('example');
        expect(wrapper.find('td').at(21).text()).to.equal('string');
        expect(wrapper.find('td').at(22).text()).to.equal('no');
        expect(wrapper.find('td').at(23).text()).to.equal('hello world');
        // check table row seven
        expect(wrapper.find('td').at(24).text()).to.equal('initials');
        expect(wrapper.find('td').at(25).text()).to.equal('initials');
        expect(wrapper.find('td').at(26).text()).to.equal('no');
        expect(wrapper.find('td').at(27).text()).to.equal('null');
    });

    it('getProps can create props table without default props', () => {
        const propTypes = {
            name: PropTypes.string.isRequired,
        };
        const wrapper = shallow(getProps(propTypes));
        expect(wrapper.find('table').length).to.equal(1);
        // check heading
        expect(wrapper.find('h3').text()).to.equal('Props');
        // check table headings
        expect(wrapper.find('th').at(0).text()).to.equal('property');
        expect(wrapper.find('th').at(1).text()).to.equal('type');
        expect(wrapper.find('th').at(2).text()).to.equal('required');
        expect(wrapper.find('th').at(3).text()).to.equal('default');
        // check table row one
        expect(wrapper.find('td').at(0).text()).to.equal('name');
        expect(wrapper.find('td').at(1).text()).to.equal('string');
        expect(wrapper.find('td').at(2).text()).to.equal('yes');
        expect(wrapper.find('td').at(3).text()).to.equal('-');
    });

    it('getSourceCode renders code snippet with title', () => {
        const wrapper = shallow(getSourceCode(<MockComponent name="testing" />));
        expect(wrapper.find('h3').text()).to.equal('Source Code');
        expect(wrapper.find('code').length).to.equal(1);
    });

    it('getSourceCode renders code snippet with props', () => {
        const wrapper = shallow(getSourceCode(<MockComponent name="testing" />));
        expect(wrapper.find('code').text()).to.equal('<MockComponent name="testing"/>');
    });

    it('getSourceCode renders code snippet with multiple props', () => {
        const wrapper = shallow(getSourceCode(<MockComponent name="testing" foo="foo" bar="bar" />));
        const expectation = expect(wrapper.find('code').text());
        expectation.to.contain('MockComponent');
        expectation.to.contain('name="testing"');
        expectation.to.contain('foo="foo"');
        expectation.to.contain('bar="bar"');
    });

    it('getSourceCode renders code snippet with bool prop', () => {
        const wrapper = shallow(getSourceCode(<MockComponent name />));
        expect(wrapper.find('code').text()).to.equal('<MockComponent name/>');
    });

    it('getSourceCode renders code snippet with react prop', () => {
        const mockProfile = <MockComponent name="Matt" />;
        const wrapper = shallow(getSourceCode(<MockComponent profile={mockProfile} />));
        expect(wrapper.find('code').text()).to.equal('<MockComponent profile={MockComponent}/>');
    });

    it('getSourceCode renders code snippet with non react object prop', () => {
        const wrapper = shallow(getSourceCode(<MockComponent style={{ color: '#fff' }} />));
        expect(wrapper.find('code').text()).to.equal('<MockComponent style={style}/>');
    });

    it('getSourceCode renders code snippet with children', () => {
        const wrapper = shallow(getSourceCode(<MockComponent name="testing">example</MockComponent>));
        expect(wrapper.find('code').text()).to.equal('<MockComponent name="testing"> ... </MockComponent>');
    });

    it('getVariations renders variants', () => {
        const wrapper = shallow(getVariations(<span>example</span>));
        expect(wrapper.find('h3').text()).to.equal('Variations');
        expect(wrapper.find('span').text()).to.equal('example');
    });

    it('getVariations returns null if variants is undefined', () => {
        expect(getVariations()).to.equal(null);
    });

    it('getKind converts fullstop to colon', () => {
        expect(getKind('example.title')).to.equal('example: title');
    });
});
