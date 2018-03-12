/* global describe, expect, it, mount */
import React from 'react';
import sinon from 'sinon';
import DateInlinePicker from './DateInlinePicker';
import * as common from '../../../test/unit/commonTests';

describe('DateInlinePicker', () => {
    common.isConformant(DateInlinePicker);

    it('renders the flatpickr calendar', () => {
        const dateInlinePicker = mount(<DateInlinePicker />);
        expect(dateInlinePicker.find('span')).to.have.className('flatpickr-input');
    });

    it('calls onChange when date changes', () => {
        const spy = sinon.spy();
        const dateInlinePicker = mount(<DateInlinePicker onChange={spy} />);
        dateInlinePicker.instance().handleChange();
        expect(spy).to.be.calledOnce();
    });

    it('does not call onChange when date changes if onChange is null', () => {
        const spy = sinon.spy();
        const dateInlinePicker = mount(<DateInlinePicker onChange={null} />);
        dateInlinePicker.instance().handleChange();
        expect(spy).to.not.be.calledOnce();
    });
});
