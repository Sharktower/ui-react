/* global Feature, Scenario  */

const KIND = 'Avatar.AvatarTitle';

Feature('AvatarTitle');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Avatar: AvatarTitle');
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

Scenario('AvatarTitle', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-avatar-title');
        I.seeElement('.uir-avatar');
        I.see('Jane Smith', '.uir-avatar-title-name');
        I.see('DELIVERY MANAGER', '.uir-avatar-title-job-role');
    });
});
