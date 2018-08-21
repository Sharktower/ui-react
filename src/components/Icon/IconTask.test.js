/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconTask from './IconTask';
import { TaskIconPriority } from './IconEnums';

describe('IconTask', () => {
    common.isConformant(IconTask, { tagName: 'svg' });
    common.addsClassName(IconTask, 'uir-icon');

    it('sets blocked', () => {
        const wrapper = shallow((
            <IconTask isBlocked />
        ));

        expect(wrapper.find('.uir-icon-task--blocked')).to.exist();
    });

    it('sets priority none', () => {
        const wrapper = shallow((
            <IconTask priority={TaskIconPriority.NONE} />
        ));

        expect(wrapper.find('.uir-icon-task--none')).to.exist();
    });

    it('sets priority low', () => {
        const wrapper = shallow((
            <IconTask priority={TaskIconPriority.LOW} />
        ));

        expect(wrapper.find('.uir-icon-task--low')).to.exist();
    });

    it('sets priority medium', () => {
        const wrapper = shallow((
            <IconTask priority={TaskIconPriority.MEDIUM} />
        ));

        expect(wrapper.find('.uir-icon-task--medium')).to.exist();
    });

    it('sets priority high', () => {
        const wrapper = shallow((
            <IconTask priority={TaskIconPriority.HIGH} />
        ));

        expect(wrapper.find('.uir-icon-task--high')).to.exist();
    });
});
