/* global describe, expect, it, shallow, mount */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import TextArea from './TextArea';
import Tooltip from '../Tooltip/Tooltip';
import IconRequired from '../Icon/IconRequired';

function createTextarea() {
    return shallow(<TextArea label="My Input" />);
}

describe('TextArea', () => {
    common.isConformant(TextArea, { requiredProps: { label: 'My Input' } });

    it('renders a label element', () => {
        const textArea = createTextarea();
        expect(textArea.find('label').length).to.equal(1);
    });

    it('does not render a label element if no label provided', () => {
        const textArea = shallow(<TextArea />);
        expect(textArea.find('label').length).to.equal(0);
    });

    it('always renders a label element if hasLabelAlways is true', () => {
        const textField = shallow(<TextArea label="foo" value="bar" hasLabelAlways />);
        expect(textField.find('label').length).to.equal(1);
    });

    it('does not render a label element if label provided put value is defined', () => {
        const textArea = shallow(<TextArea label="test" value="example" />);
        expect(textArea.find('label').length).to.equal(0);
    });

    it('renders a label element when there is value and textarea has focus', () => {
        const textArea = shallow(<TextArea label="test" value="example" />);
        textArea.find('textarea').simulate('focus');
        expect(textArea.find('label').length).to.equal(1);
    });

    it('renders a label element when there is value and TextArea has mouse over', () => {
        const textArea = shallow(<TextArea label="test" value="example" />);
        textArea.simulate('mouseEnter');
        expect(textArea.find('label').length).to.equal(1);
    });

    it('sets state hasFocus to true when textarea focuses', () => {
        const textArea = createTextarea();
        textArea.find('textarea').simulate('focus');
        expect(textArea.state('hasFocus')).equal(true);
    });

    it('sets state hasFocus to false when textarea blurs', () => {
        const textArea = createTextarea();
        textArea.find('textarea').simulate('blur');
        expect(textArea.state('hasFocus')).equal(false);
    });

    it('sets state hasMouseOver to true when textarea sees mouseEnter', () => {
        const textArea = createTextarea();
        textArea.simulate('mouseEnter');
        expect(textArea.state('hasMouseOver')).equal(true);
    });

    it('sets state hasMouseOver to false when textarea sees mouseLeave', () => {
        const textArea = createTextarea();
        textArea.simulate('mouseEnter');
        expect(textArea.state('hasMouseOver')).equal(true);
        textArea.simulate('mouseLeave');
        expect(textArea.state('hasMouseOver')).equal(false);
    });

    it('gives parent div focus class when textarea has focus ', () => {
        const textArea = createTextarea();
        textArea.find('textarea').simulate('focus');
        expect(textArea).to.have.className('uir-text-area--focus');
    });

    it('renders an textarea element', () => {
        const textArea = createTextarea();
        expect(textArea.find('textarea').length).to.equal(1);
    });

    it('has the correct classes', () => {
        const textArea = createTextarea();
        expect(textArea).to.have.className('uir-text-area');
        expect(textArea.find('label')).to.have.className('uir-text-area-label');
        expect(textArea.find('textarea')).to.have.className('uir-text-area-input');
    });

    it('can pass in a className prop', () => {
        const exampleClass = 'test-me';
        const textArea = shallow(<TextArea className={exampleClass} />);
        expect(textArea).to.have.className(exampleClass);
    });

    it('has a full width class if isFullWidth is passed', () => {
        const textArea = shallow(<TextArea isFullWidth />);
        expect(textArea).to.have.className('uir-text-area--full-width');
    });

    it('has a auto resize class if hasAutoHeight is passed', () => {
        const textArea = shallow(<TextArea hasAutoHeight />);
        expect(textArea).to.have.className('uir-text-area--has-auto-height');
    });

    it('shows a placeholder when textarea has focus', () => {
        const examplePlaceholder = 'example placeholder';
        const textArea = shallow(<TextArea placeholder={examplePlaceholder} />);
        textArea.setState({ hasFocus: true });
        const textarea = textArea.find('textarea');
        expect(textarea.prop('placeholder')).to.equal(examplePlaceholder);
    });

    it('can take a starting value', () => {
        const exampleValue = 'my example value';
        const textArea = shallow(<TextArea value={exampleValue} />);
        expect(textArea.find('textarea').prop('value')).to.equal(exampleValue);
    });

    it('updates the component state when changing the textarea value', () => {
        const textArea = shallow(<TextArea />);
        const instance = textArea.instance();
        instance.inputRef = { value: 'test' };
        const setStateSpy = sinon.spy(textArea.instance(), 'setState');
        textArea.find('textarea').simulate('change');
        expect(setStateSpy).to.have.been.called();
    });

    it('does not update the component state if textarea value is undefined', () => {
        const textArea = shallow(<TextArea />);
        const instance = textArea.instance();
        instance.inputRef = { value: undefined };
        const mock = sinon.mock(instance);
        const expectation = mock.expects('setState');
        textArea.find('textarea').simulate('change');
        expect(expectation).to.not.be.called();
        mock.restore();
    });

    it('can expose the textarea ref', () => {
        mount(<TextArea
            componentRef={ref => expect(ref).to.not.be.undefined}
        />);
    });

    it('does nothing if no component ref fn is provided', () => {
        mount(<TextArea />);
    });

    ['blur', 'change', 'focus', 'keyDown', 'keyPress', 'keyUp'].forEach((event) => {
        it(`triggers handler on textarea ${event}`, () => {
            const spy = sinon.spy();
            const textArea = shallow(<TextArea
                onBlur={spy}
                onChange={spy}
                onFocus={spy}
                onKeyDown={spy}
                onKeyPress={spy}
                onKeyUp={spy}
            />);
            const instance = textArea.instance();
            instance.inputRef = { value: 'test' };
            textArea.find('textarea').simulate(event, { key: 'x' });
            expect(spy).to.be.calledOnce();
        });

        it(`does nothing on ${event} if handler is not defined`, () => {
            const spy = sinon.spy();
            const textArea = createTextarea();
            const instance = textArea.instance();
            instance.inputRef = { value: 'test' };
            textArea.find('textarea').simulate(event);
            expect(spy).to.not.be.called();
        });
    });

    it('triggers handler on textarea enter key press', () => {
        const spy = sinon.spy();
        const textArea = shallow(<TextArea onEnterKey={spy} />);
        const instance = textArea.instance();
        instance.inputRef = { value: 'test' };
        textArea.find('textarea').simulate('keyDown', { key: 'Enter' });
        expect(spy).to.be.calledOnce();
    });

    it('allows textarea to be disabled', () => {
        const textArea = shallow(<TextArea isDisabled />);
        expect(textArea.find('textarea').prop('disabled')).to.equal(true);
    });

    it('allows textarea to be read only', () => {
        const textArea = shallow(<TextArea isReadOnly />);
        expect(textArea.find('textarea').prop('readOnly')).to.equal(true);
    });

    it('allows textarea to be marked as required', () => {
        const textArea = shallow(<TextArea isRequired />);
        expect(textArea.find('textarea').prop('required')).to.equal(true);
    });

    it('has no validation classes by default', () => {
        const textArea = shallow(<TextArea />);
        expect(textArea).to.not.have.className('uir-text-area--valid');
        expect(textArea).to.not.have.className('uir-text-area--invalid');
    });

    it('has no validation classes if isValid is null', () => {
        const textArea = shallow(<TextArea isValid={null} />);
        expect(textArea).to.not.have.className('uir-text-area--valid');
        expect(textArea).to.not.have.className('uir-text-area--invalid');
    });

    it('adds valid class if isValid is true', () => {
        const textArea = shallow(<TextArea isValid />);
        expect(textArea).to.have.className('uir-text-area--valid');
    });

    it('adds invalid class if isValid is false', () => {
        const textArea = shallow(<TextArea isValid={false} />);
        expect(textArea).to.have.className('uir-text-area--invalid');
    });

    it('wraps textarea in a tooltip if tooltipError is given', () => {
        const textArea = shallow(<TextArea tooltipError="error" />);
        expect(textArea.find(Tooltip).length).to.equal(1);
    });

    it('wraps textarea in a tooltip if tooltipHint is given', () => {
        const textArea = shallow(<TextArea tooltipHint="hint" />);
        expect(textArea.find(Tooltip).length).to.equal(1);
    });

    it('displays a required icon if isRequired is given', () => {
        const textArea = shallow(<TextArea label="my label" hasLabelAlways isRequired />);
        expect(textArea.find(IconRequired).length).to.equal(1);
    });

    it('shows a tooltip when hovering over required icon', () => {
        const textArea = shallow(<TextArea label="my label" hasLabelAlways isRequired />);
        textArea.find(IconRequired).simulate('hover');
        expect(textArea.find(Tooltip).length).to.equal(1);
    });

    it('adds style to wrapper if style provided', () => {
        const exampleStyle = { marginTop: '20px' };
        const textArea = shallow(<TextArea style={exampleStyle} />);
        expect(textArea.prop('style')).to.equal(exampleStyle);
    });
});
