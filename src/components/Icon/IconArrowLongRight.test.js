/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconArrowLongRight from './IconArrowLongRight';

describe('IconArrowLongRight', () => {
    common.isConformant(IconArrowLongRight, { tagName: 'svg' });
    common.addsClassName(IconArrowLongRight, 'uir-icon');
});
