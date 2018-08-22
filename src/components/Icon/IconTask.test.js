/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconTask from './IconTask';
import { IconPriority } from './IconEnums';

describe('IconTask', () => {
    common.isConformant(IconTask, { tagName: 'svg' });
    common.addsClassName(IconTask, 'uir-icon');

    it('sets blocked', () => {
        const wrapper = shallow((
            <IconTask isBlocked />
        ));

        expect(wrapper).to.have.className('uir-icon-task--blocked');
    });

    it('sets priority to none by default', () => {
        const wrapper = shallow((
            <IconTask />
        ));

        expect(wrapper).to.have.className('uir-icon-task--none');
    });

    it('sets priority low', () => {
        const wrapper = shallow((
            <IconTask priority={IconPriority.LOW} />
        ));

        expect(wrapper).to.have.className('uir-icon-task--low');
    });

    it('sets priority medium', () => {
        const wrapper = shallow((
            <IconTask priority={IconPriority.MEDIUM} />
        ));

        expect(wrapper).to.have.className('uir-icon-task--medium');
    });

    it('sets priority high', () => {
        const wrapper = shallow((
            <IconTask priority={IconPriority.HIGH} />
        ));

        expect(wrapper).to.have.className('uir-icon-task--high');
    });
});
