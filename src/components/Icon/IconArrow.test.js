/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconArrow from './IconArrow';

describe('IconArrow', () => {
    common.isConformant(IconArrow, { tagName: 'svg' });
    common.addsClassName(IconArrow, 'uir-icon');
});
