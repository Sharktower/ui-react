/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconNotStarted from './IconNotStarted';

describe('IconNotStarted', () => {
    common.isConformant(IconNotStarted, { tagName: 'svg' });
    common.addsClassName(IconNotStarted, 'uir-icon');
});
