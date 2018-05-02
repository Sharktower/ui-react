/* global describe, expect, it, shallow, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../../test/unit/commonTests';
import AvatarMenuNav from './AvatarMenuNav';

describe('AvatarMenuNav', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    common.isConformant(AvatarMenuNav, {
        tagName: 'ul',
        requiredProps: {
        },
    });

    it('complains if children are not provided', () => {
        shallow(<AvatarMenuNav />);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.called();
    });

    it('renders children', () => {
        const avatarMenuNav = shallow((
            <AvatarMenuNav>
                <div>Test Link</div>
            </AvatarMenuNav>
        ));
        expect(avatarMenuNav.find('div').length).to.equal(1);
        expect(avatarMenuNav.text()).to.equal('Test Link');
    });
});
