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
        I.seeNumberOfElements('td', 6 * 4);
    });
});

Scenario('AvatarTitle', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-avatar-title');
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.seeElement('.uir-avatar-title-job-role');
        I.see('Delivery Manager');
    });
});
