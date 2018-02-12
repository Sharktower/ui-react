/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconSearch from './IconSearch';

describe('IconSearch', () => {
    common.isConformant(IconSearch, { tagName: 'svg' });
    common.addsClassName(IconSearch, 'uir-icon');
});
