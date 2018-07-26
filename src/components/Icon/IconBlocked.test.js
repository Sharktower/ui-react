/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconBlocked from './IconBlocked';

describe('IconTask', () => {
    common.isConformant(IconBlocked, { tagName: 'svg' });
    common.addsClassName(IconBlocked, 'uir-icon');
});
