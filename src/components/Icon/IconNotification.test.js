/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconNotification from './IconNotification';

describe('IconNotification', () => {
    common.isConformant(IconNotification, { tagName: 'svg' });
    common.addsClassName(IconNotification, 'uir-icon');
});
