/* global describe, expect, it */
import { formatDate } from './date-utils';

describe('date-utils', () => {
    it('can format a current date', () => {
        const mockDate = new Date();
        mockDate.setDate(1);
        mockDate.setMonth(0);
        mockDate.setYear(2018);
        expect(formatDate(mockDate)).to.equal('1 Jan 2018');
    });

    it('can format an old date', () => {
        const mockDate = new Date();
        mockDate.setDate(30);
        mockDate.setMonth(9);
        mockDate.setYear(1999);
        expect(formatDate(mockDate)).to.equal('30 Oct 1999');
    });

    it('can format a future date', () => {
        const mockDate = new Date();
        mockDate.setDate(15);
        mockDate.setMonth(6);
        mockDate.setYear(3050);
        expect(formatDate(mockDate)).to.equal('15 Jul 3050');
    });

    it('dateFormat will error if passed null', () => {
        function badFn() { formatDate(null); }
        expect(badFn).to.throw();
    });

    it('dateFormat will error if passed undefined', () => {
        function badFn() { formatDate(); }
        expect(badFn).to.throw();
    });

    it('dateFormat will error if passed string', () => {
        function badFn() { formatDate('not a date'); }
        expect(badFn).to.throw();
    });
});
