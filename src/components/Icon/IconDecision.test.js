/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconDecision from './IconDecision';

describe('IconDecision', () => {
    common.isConformant(IconDecision, { tagName: 'svg' });
    common.addsClassName(IconDecision, 'uir-icon');

    it('sets blocked', () => {
        const wrapper = shallow((
            <IconDecision blocked />
        ));

        expect(wrapper.find('.uir-icon-decision-blocked')).to.exist();
    });

    it('sets priority low', () => {
        const wrapper = shallow((
            <IconDecision priority="LOW" />
        ));

        expect(wrapper.find('.uir-icon-decision-low')).to.exist();
    });

    it('sets priority medium', () => {
        const wrapper = shallow((
            <IconDecision priority="MEDIUM" />
        ));

        expect(wrapper.find('.uir-icon-decision-medium')).to.exist();
    });

    it('sets priority high', () => {
        const wrapper = shallow((
            <IconDecision priority="HIGH" />
        ));

        expect(wrapper.find('.uir-icon-decision-high')).to.exist();
    });
});
