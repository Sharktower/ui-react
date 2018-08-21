/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconStory from './IconStory';
import { IconPriority } from './IconEnums';

describe('IconStory', () => {
    common.isConformant(IconStory, { tagName: 'svg' });
    common.addsClassName(IconStory, 'uir-icon');

    it('sets blocked', () => {
        const wrapper = shallow((
            <IconStory isBlocked />
        ));

        expect(wrapper).to.have.className('uir-icon-story--blocked');
    });

    it('sets priority to none by default', () => {
        const wrapper = shallow((
            <IconStory />
        ));

        expect(wrapper).to.have.className('uir-icon-story--none');
    });

    it('sets priority low', () => {
        const wrapper = shallow((
            <IconStory priority={IconPriority.LOW} />
        ));

        expect(wrapper).to.have.className('uir-icon-story--low');
    });

    it('sets priority medium', () => {
        const wrapper = shallow((
            <IconStory priority={IconPriority.MEDIUM} />
        ));

        expect(wrapper).to.have.className('uir-icon-story--medium');
    });

    it('sets priority high', () => {
        const wrapper = shallow((
            <IconStory priority={IconPriority.HIGH} />
        ));

        expect(wrapper).to.have.className('uir-icon-story--high');
    });
});
