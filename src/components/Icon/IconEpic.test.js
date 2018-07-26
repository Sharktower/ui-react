/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconEpic from './IconEpic';

describe('IconEpic', () => {
    common.isConformant(IconEpic, { tagName: 'svg' });
    common.addsClassName(IconEpic, 'uir-icon');
});
