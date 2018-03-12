/* global describe, expect, it, shallow, mount */
import React from 'react';
import sinon from 'sinon';
import DateField from './DateField';
import DateFieldLinked from './DateFieldLinked';
import * as common from '../../../test/unit/commonTests';

function createMockDate() {
    const mockDate = new Date();
    mockDate.setDate(1);
    mockDate.setMonth(0);
    mockDate.setYear(2018);
    return mockDate;
}

describe('DateFieldLinked', () => {
    common.isConformant(DateFieldLinked);

    it('can update state with the initial date values', () => {
        const mockDate = createMockDate();
        const dateFieldLinked = mount(<DateFieldLinked
            rangeFromValue={mockDate}
            rangeToValue={mockDate}
        />);
        const rangeFromValue = dateFieldLinked.state('rangeFromValue');
        const rangeToValue = dateFieldLinked.state('rangeToValue');
        expect(rangeFromValue.toString()).to.equal(mockDate.toString());
        expect(rangeToValue.toString()).to.equal(mockDate.toString());
    });

    it('date values are mapped to internal DateFields', () => {
        const mockDate = createMockDate();
        const dateFieldLinked = mount(<DateFieldLinked
            rangeFromValue={mockDate}
            rangeToValue={mockDate}
        />);
        const firstDateField = dateFieldLinked.find(DateField).first();
        const lastDateField = dateFieldLinked.find(DateField).last();
        expect(firstDateField.prop('rangeFromValue').toString()).to.equal(mockDate.toString());
        expect(firstDateField.prop('rangeToValue').toString()).to.equal(mockDate.toString());
        expect(lastDateField.prop('rangeFromValue').toString()).to.equal(mockDate.toString());
        expect(lastDateField.prop('rangeToValue').toString()).to.equal(mockDate.toString());
    });

    it('can update the component by changing props', () => {
        const mockDate = createMockDate();
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.setProps({ rangeFromValue: mockDate, rangeToValue: mockDate });
        const rangeFromValue = dateFieldLinked.state('rangeFromValue');
        const rangeToValue = dateFieldLinked.state('rangeToValue');
        expect(rangeFromValue.toString()).to.equal(mockDate.toString());
        expect(rangeToValue.toString()).to.equal(mockDate.toString());
    });

    it('updating a prop other than value does not cause data state to change', () => {
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.setProps({ className: 'test' });
        const rangeFromValue = dateFieldLinked.state('rangeFromValue');
        const rangeToValue = dateFieldLinked.state('rangeToValue');
        expect(rangeFromValue).to.be.null();
        expect(rangeToValue).to.be.null();
    });

    it('handleChange will set internal state', () => {
        const mockDate = createMockDate();
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.instance().handleChange([mockDate, mockDate]);
        const rangeFromValue = dateFieldLinked.state('rangeFromValue');
        const rangeToValue = dateFieldLinked.state('rangeToValue');
        expect(rangeFromValue.toString()).to.equal(mockDate.toString());
        expect(rangeToValue.toString()).to.equal(mockDate.toString());
    });

    it('onChange will fire when input changes', () => {
        const spy = sinon.spy();
        const mockDate = createMockDate();
        const dateFieldLinked = shallow(<DateFieldLinked onChange={spy} />);
        dateFieldLinked.instance().handleChange([mockDate, mockDate]);
        expect(spy).to.be.calledOnce();
    });

    it('only allows the from datepicker to display when from has focus', () => {
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.find('input').first().simulate('focus');
        expect(dateFieldLinked.state('hideFromDatePicker')).to.be.false();
        expect(dateFieldLinked.state('hideToDatePicker')).to.be.true();
    });

    it('only allows the to datepicker to display when to has focus', () => {
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.find('input').last().simulate('focus');
        expect(dateFieldLinked.state('hideFromDatePicker')).to.be.true();
        expect(dateFieldLinked.state('hideToDatePicker')).to.be.false();
    });
});
