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
        const dateFieldLinked = mount(<DateFieldLinked value={[mockDate, mockDate]} />);
        const internalState = dateFieldLinked.state('selectedDates');
        expect(internalState.length).to.equal(2);
        expect(internalState[0].toString()).to.equal(mockDate.toString());
        expect(internalState[1].toString()).to.equal(mockDate.toString());
    });

    it('date values are mapped to internal DateFields', () => {
        const mockDate = createMockDate();
        const dateFieldLinked = mount(<DateFieldLinked value={[mockDate, mockDate]} />);
        const firstDateField = dateFieldLinked.find(DateField).first();
        const lastDateField = dateFieldLinked.find(DateField).last();
        expect(firstDateField.prop('value')[0].toString()).to.equal(mockDate.toString());
        expect(firstDateField.prop('value')[1].toString()).to.equal(mockDate.toString());
        expect(lastDateField.prop('value')[0].toString()).to.equal(mockDate.toString());
        expect(lastDateField.prop('value')[1].toString()).to.equal(mockDate.toString());
    });

    it('can update the component by changing props', () => {
        const mockDate = createMockDate();
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.setProps({ value: [mockDate, mockDate] });
        const internalState = dateFieldLinked.state('selectedDates');
        expect(internalState[0].toString()).to.equal(mockDate.toString());
        expect(internalState[1].toString()).to.equal(mockDate.toString());
    });

    it('updating a prop other than value does not cause data state to change', () => {
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.setProps({ className: 'test' });
        const internalState = dateFieldLinked.state('selectedDates');
        expect(internalState).to.be.empty();
    });

    it('handleChange will set internal state', () => {
        const mockDate = createMockDate();
        const dateFieldLinked = mount(<DateFieldLinked />);
        dateFieldLinked.instance().handleChange([mockDate, mockDate]);
        const internalState = dateFieldLinked.state('selectedDates');
        expect(internalState.length).to.equal(2);
        expect(internalState[0].toString()).to.equal(mockDate.toString());
        expect(internalState[1].toString()).to.equal(mockDate.toString());
    });

    it('onChange will fire when input changes', () => {
        const spy = sinon.spy();
        const dateFieldLinked = shallow(<DateFieldLinked onChange={spy} />);
        dateFieldLinked.instance().handleChange();
        expect(spy).to.be.calledOnce();
    });
});
