/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconRequired from './IconRequired';

describe('IconRequired', () => {
    common.isConformant(IconRequired, { tagName: 'svg' });
    common.addsClassName(IconRequired, 'uir-icon');
});
