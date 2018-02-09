/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconMore from './IconMore';

describe('IconMore', () => {
    common.isConformant(IconMore, { tagName: 'svg' });
    common.addsClassName(IconMore, 'uir-icon');
});
