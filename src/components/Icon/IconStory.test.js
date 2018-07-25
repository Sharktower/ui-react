/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconStory from './IconStory';

describe('IconStory', () => {
    common.isConformant(IconStory, { tagName: 'svg' });
    common.addsClassName(IconStory, 'uir-icon');

    it('sets blocked', () => {
        const wrapper = shallow((
            <IconStory blocked />
        ));

        expect(wrapper.find('.uir-icon-story-blocked')).to.exist();
    });

    it('sets priority low', () => {
        const wrapper = shallow((
            <IconStory priority="LOW" />
        ));

        expect(wrapper.find('.uir-icon-story-low')).to.exist();
    });

    it('sets priority medium', () => {
        const wrapper = shallow((
            <IconStory priority="MEDIUM" />
        ));

        expect(wrapper.find('.uir-icon-story-medium')).to.exist();
    });

    it('sets priority high', () => {
        const wrapper = shallow((
            <IconStory priority="HIGH" />
        ));

        expect(wrapper.find('.uir-icon-story-high')).to.exist();
    });
});
