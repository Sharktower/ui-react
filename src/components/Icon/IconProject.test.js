/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconProject from './IconProject';

describe('IconProject', () => {
    common.isConformant(IconProject, { tagName: 'svg' });
    common.addsClassName(IconProject, 'uir-icon');

    it('sets title', () => {
        const wrapper = shallow((
            <IconProject title="Test title" />
        ));

        expect(wrapper.find('title')).to.have.text('Test title');
    });
});
