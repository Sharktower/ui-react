/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconCalendar from './IconCalendar';

describe('IconCalendar', () => {
    common.isConformant(IconCalendar, { tagName: 'svg' });
    common.addsClassName(IconCalendar, 'uir-icon');

    it('sets title', () => {
        const wrapper = shallow((
            <IconCalendar title="Test title" />
        ));

        expect(wrapper.find('title')).to.have.text('Test title');
    });
});
