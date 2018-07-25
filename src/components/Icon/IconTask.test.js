/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconTask from './IconTask';

describe('IconTask', () => {
    common.isConformant(IconTask, { tagName: 'svg' });
    common.addsClassName(IconTask, 'uir-icon');

    it('sets blocked', () => {
        const wrapper = shallow((
            <IconTask blocked />
        ));

        expect(wrapper.find('.uir-icon-task-blocked')).to.exist();
    });

    it('sets priority low', () => {
        const wrapper = shallow((
            <IconTask priority="LOW" />
        ));

        expect(wrapper.find('.uir-icon-task-low')).to.exist();
    });

    it('sets priority medium', () => {
        const wrapper = shallow((
            <IconTask priority="MEDIUM" />
        ));

        expect(wrapper.find('.uir-icon-task-medium')).to.exist();
    });

    it('sets priority high', () => {
        const wrapper = shallow((
            <IconTask priority="HIGH" />
        ));

        expect(wrapper.find('.uir-icon-task-high')).to.exist();
    });
});
