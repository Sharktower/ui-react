/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconPriority from './IconPriority';

describe('IconPriority', () => {
    common.isConformant(IconPriority, { tagName: 'svg' });
    common.addsClassName(IconPriority, 'uir-icon');
});
