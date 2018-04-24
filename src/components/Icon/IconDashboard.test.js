/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconDashboard from './IconDashboard';

describe('IconDashboard', () => {
    common.isConformant(IconDashboard, { tagName: 'svg' });
    common.addsClassName(IconDashboard, 'uir-icon');
});
