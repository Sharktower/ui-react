/* global Feature, Scenario  */

const KIND = 'Avatar.AvatarMenu';

Feature('AvatarMenu');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Avatar: AvatarMenu');
        I.see('Overview');
        I.see('Example');
        I.see('Source Code');
        I.seeElement('code');
        I.see('Props');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
    });
});

Scenario('AvatarMenu', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-avatar-menu');
    });
});
