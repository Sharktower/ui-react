/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconClose from './IconClose';

describe('IconClose', () => {
    common.isConformant(IconClose, { tagName: 'svg' });
    common.addsClassName(IconClose, 'uir-icon');
});
