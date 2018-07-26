/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconComplete from './IconComplete';

describe('IconComplete', () => {
    common.isConformant(IconComplete, { tagName: 'svg' });
    common.addsClassName(IconComplete, 'uir-icon');
});
