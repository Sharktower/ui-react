/* global describe it shallow expect */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import IconComplete from './IconComplete';

describe('IconComplete', () => {
    common.isConformantIcon(IconComplete);

    it("don't set gradient", () => {
        const wrapper = shallow(<IconComplete />);
        expect(wrapper.find('linearGradient')).to.not.exist();
    });

    it('set gradient', () => {
        const wrapper = shallow(<IconComplete gradient={{ from: '#662483', to: '#af1c63' }} />);
        expect(wrapper.find('linearGradient')).to.exist();
    });
});
