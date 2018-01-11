/* global describe, expect, it */
import InitialsPropType from './initials';

describe('Initials Prop Type', () => {
    it('returns null if initials are 1 character long', () => {
        expect(InitialsPropType({ initials: 'M' }, 'initials', 'component'))
            .to.equal(null);
    });

    it('returns null if initials are 2 characters long', () => {
        expect(InitialsPropType({ initials: 'MD' }, 'initials', 'component'))
            .to.equal(null);
    });

    it('throws an error if initials are less than 1 character long', () => {
        const validator = InitialsPropType({ initials: '' }, 'initials', 'component');
        expect(validator)
            .to.instanceOf(Error);
        expect(validator.message)
            .to.equal('Initials supplied to `component` should be 1 or 2 characters');
    });

    it('throws an error if initials are greater than 2 character long', () => {
        const validator = InitialsPropType({ initials: 'MPD' }, 'initials', 'component');
        expect(validator)
            .to.instanceOf(Error);
        expect(validator.message)
            .to.equal('Initials supplied to `component` should be 1 or 2 characters');
    });

    it('returns null if initials are undefined and NOT required', () => {
        expect(InitialsPropType({}, 'initials', 'component'))
            .to.equal(null);
    });

    it('throws an error if initials are undefined and ARE required', () => {
        const validator = InitialsPropType.isRequired({}, 'initials', 'component');
        expect(validator)
            .to.instanceOf(Error);
        expect(validator.message)
            .to.equal('The prop `initials` is marked as required in `component`');
    });
});
