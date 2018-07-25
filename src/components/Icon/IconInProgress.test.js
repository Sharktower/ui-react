/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconInProgress from './IconInProgress';

describe('IconInProgress', () => {
    common.isConformant(IconInProgress, { tagName: 'svg' });
    common.addsClassName(IconInProgress, 'uir-icon');
});
