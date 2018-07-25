/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconTask from './IconTask';

describe('IconTask', () => {
    common.isConformant(IconTask, { tagName: 'svg' });
    common.addsClassName(IconTask, 'uir-icon');
});
