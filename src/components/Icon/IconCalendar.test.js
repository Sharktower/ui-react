/* global describe */
import * as common from '../../../test/unit/commonTests';
import IconCalendar from './IconCalendar';

describe('IconCalendar', () => {
    common.isConformant(IconCalendar, { tagName: 'svg' });
    common.addsClassName(IconCalendar, 'uir-icon');
});
