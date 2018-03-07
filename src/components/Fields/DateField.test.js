/* global describe, expect, it, shallow, mount */
import React from 'react';
import sinon from 'sinon';
import DateField from './DateField';
import Button from '../Button/Button';
import * as common from '../../../test/unit/commonTests';

function createMockDate() {
    const mockDate = new Date();
    mockDate.setDate(1);
    mockDate.setMonth(0);
    mockDate.setYear(2018);
    return mockDate;
}

describe('DateField', () => {
    common.isConformant(DateField);

    it('can set an initial date value', () => {
        const dateField = mount(<DateField value={createMockDate()} />);
        expect(dateField.find('input').prop('value')).to.equal('01 Jan 2018');
    });

    it('can change the value via props', () => {
        const mockDate = createMockDate();
        const dateField = mount(<DateField value={mockDate} />);
        mockDate.setDate(20);
        dateField.setProps({ value: mockDate });
        expect(dateField.find('input').prop('value')).to.equal('20 Jan 2018');
    });

    it('does call setState if value prop is changed', () => {
        const dateField = mount(<DateField />);
        const instance = dateField.instance();
        sinon.spy(instance, 'setState');
        dateField.setProps({ value: createMockDate() });
        expect(instance.setState).to.be.calledOnce();
    });

    it('does not call setState if props (excl value) are changed', () => {
        const dateField = mount(<DateField />);
        const instance = dateField.instance();
        sinon.spy(instance, 'setState');
        dateField.setProps({ class: 'foo-bar-class' });
        expect(instance.setState).to.not.be.called();
    });

    it('will show date picker on focus', () => {
        const dateField = mount(<DateField value={createMockDate()} />);
        dateField.find('input').simulate('focus');
        expect(dateField.state('showDatePicker')).to.be.true();
    });

    it('will hide date picker on blur', () => {
        const dateField = mount(<DateField value={createMockDate()} />);
        dateField.find('input').simulate('focus');
        expect(dateField.state('showDatePicker')).to.be.true();
        dateField.find('input').simulate('blur');
        expect(dateField.state('showDatePicker')).to.be.false();
    });

    it('sets selectedDate when DateInlinePicker changes', () => {
        const mockDate = createMockDate();
        const dateField = shallow(<DateField />);
        dateField.instance().handleDatePickerChange([mockDate]);
        expect(dateField.state('selectedDate').toString()).to.equal(mockDate.toString());
    });

    it('sets multiple selectedDates when isRange is true', () => {
        const mockDate = createMockDate();
        const dateField = shallow(<DateField isRange />);
        dateField.instance().handleDatePickerChange([mockDate, mockDate]);
        const selectedDates = dateField.state('selectedDate');
        expect(selectedDates).to.be.an('array');
        expect(selectedDates[0].toString()).to.equal(mockDate.toString());
        expect(selectedDates[1].toString()).to.equal(mockDate.toString());
    });

    it('will hide the datepicker when a date is selected', () => {
        const mockDate = createMockDate();
        const dateField = shallow(<DateField />);
        dateField.setState({ showDatePicker: true });
        dateField.instance().handleDatePickerChange([mockDate]);
        expect(dateField.state('showDatePicker')).to.be.false();
    });

    it('will hide the datepicker when mutliple dates are selected and isRange is true', () => {
        const mockDate = createMockDate();
        const dateField = shallow(<DateField isRange />);
        dateField.setState({ showDatePicker: true });
        dateField.instance().handleDatePickerChange([mockDate, mockDate]);
        expect(dateField.state('showDatePicker')).to.be.false();
    });

    it('will not hide the datepicker if a single date selected and isRange is true', () => {
        const mockDate = createMockDate();
        const dateField = shallow(<DateField isRange />);
        dateField.setState({ showDatePicker: true });
        dateField.instance().handleDatePickerChange([mockDate]);
        expect(dateField.state('showDatePicker')).to.be.true();
    });

    it('clearable icon will clear the selectedDate state', () => {
        const dateField = mount(<DateField value={createMockDate()} isClearable />);
        dateField.find(Button).simulate('click');
        expect(dateField.state('selectedDate')).to.be.null();
    });

    it('handleInputChange will call clear selectedDate if input is null', () => {
        const dateField = mount(<DateField value={createMockDate()} />);
        dateField.instance().handleInputChange(null);
        expect(dateField.state('selectedDate')).to.be.null();
    });

    it('handleInputChange will call clear selectedDate if input is empty string', () => {
        const dateField = mount(<DateField value={createMockDate()} />);
        dateField.instance().handleInputChange('');
        expect(dateField.state('selectedDate')).to.be.null();
    });

    it('onChange will fire when input changes', () => {
        const spy = sinon.spy();
        const dateField = mount(<DateField onChange={spy} />);
        dateField.find('input').simulate('change');
        expect(spy).to.be.calledOnce();
    });

    it('onFocus will fire when input gains focus', () => {
        const spy = sinon.spy();
        const dateField = mount(<DateField onFocus={spy} />);
        dateField.find('input').simulate('focus');
        expect(spy).to.be.calledOnce();
    });

    it('onBlur will fire when input loses focus', () => {
        const spy = sinon.spy();
        const dateField = mount(<DateField onBlur={spy} />);
        dateField.find('input').simulate('blur');
        expect(spy).to.be.calledOnce();
    });

    it('DateInlinePicker can be programatically closed via forceHideCalendar prop', () => {
        const dateField = mount(<DateField />);
        dateField.find('input').simulate('focus');
        expect(dateField.state('showDatePicker')).to.be.true();
        dateField.setProps({ forceHideCalendar: true });
        expect(dateField.state('showDatePicker')).to.be.false();
    });

    it('DateInlinePicker visibility controlled by component if forceHideCalendar prop false', () => {
        const dateField = mount(<DateField forceHideCalendar />);
        dateField.find('input').simulate('focus');
        expect(dateField.state('showDatePicker')).to.be.true();
        dateField.setProps({ forceHideCalendar: false });
        expect(dateField.state('showDatePicker')).to.be.true();
    });
});
