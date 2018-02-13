/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconClear from './IconClear';

describe('IconClear', () => {
    common.isConformant(IconClear, { tagName: 'svg' });
    common.addsClassName(IconClear, 'uir-icon');
});
