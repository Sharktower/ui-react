/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconKanban from './IconKanban';

describe('IconKanban', () => {
    common.isConformant(IconKanban, { tagName: 'svg' });
    common.addsClassName(IconKanban, 'uir-icon');

    it('sets title', () => {
        const wrapper = shallow((
            <IconKanban title="Test title" />
        ));

        expect(wrapper.find('title')).to.have.text('Test title');
    });
});
