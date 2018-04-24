/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconProject from './IconProject';

describe('IconProject', () => {
    common.isConformant(IconProject, { tagName: 'svg' });
    common.addsClassName(IconProject, 'uir-icon');
});
