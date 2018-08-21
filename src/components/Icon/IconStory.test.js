/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconStory from './IconStory';
import { TaskIconPriority } from './IconEnums';

describe('IconStory', () => {
    common.isConformant(IconStory, { tagName: 'svg' });
    common.addsClassName(IconStory, 'uir-icon');

    it('sets blocked', () => {
        const wrapper = shallow((
            <IconStory isBlocked />
        ));

        expect(wrapper.find('.uir-icon-story--blocked')).to.exist();
    });

    it('sets priority none', () => {
        const wrapper = shallow((
            <IconStory priority={TaskIconPriority.NONE} />
        ));

        expect(wrapper.find('.uir-icon-story--none')).to.exist();
    });

    it('sets priority low', () => {
        const wrapper = shallow((
            <IconStory priority={TaskIconPriority.LOW} />
        ));

        expect(wrapper.find('.uir-icon-story--low')).to.exist();
    });

    it('sets priority medium', () => {
        const wrapper = shallow((
            <IconStory priority={TaskIconPriority.MEDIUM} />
        ));

        expect(wrapper.find('.uir-icon-story--medium')).to.exist();
    });

    it('sets priority high', () => {
        const wrapper = shallow((
            <IconStory priority={TaskIconPriority.HIGH} />
        ));

        expect(wrapper.find('.uir-icon-story--high')).to.exist();
    });
});
