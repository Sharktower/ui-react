/* global Feature, Scenario  */
const searchWithinIframe = require('../../../test/codecept/utils/searchWithinIframe.js');

const KIND = 'Avatar.AvatarTitle';

Feature('AvatarTitle');

Scenario('Overview', (I) => {
    searchWithinIframe(I, KIND, 'Overview', () => {
        I.see('Avatar: AvatarTitle');
        I.see('Overview');
        I.see('Example');
        I.seeElement('.uir-avatar-title');
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.seeElement('.uir-avatar-title-job-role');
        I.see('Delivery Manager');
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

Scenario('Name only', (I) => {
    searchWithinIframe(I, KIND, 'Name only', () => {
        I.see('Name only');
        I.seeNumberOfElements('.uir-avatar-title', 1);
        I.dontSeeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.dontSeeElement('.uir-avatar-title-job-role');
    });
});

Scenario('Name and profile', (I) => {
    searchWithinIframe(I, KIND, 'Name and profile', () => {
        I.see('Name and profile');
        I.seeNumberOfElements('.uir-avatar-title', 1);
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.dontSeeElement('.uir-avatar-title-job-role');
    });
});

Scenario('Name and role', (I) => {
    searchWithinIframe(I, KIND, 'Name and role', () => {
        I.see('Name and role');
        I.seeNumberOfElements('.uir-avatar-title', 1);
        I.dontSeeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.seeElement('.uir-avatar-title-job-role');
        I.see('Delivery Manager');
    });
});

Scenario('Name, role and profile', (I) => {
    searchWithinIframe(I, KIND, 'Name, role and profile', () => {
        I.see('Name, role and profile');
        I.seeNumberOfElements('.uir-avatar-title', 1);
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.seeElement('.uir-avatar-title-job-role');
        I.see('Delivery Manager');
    });
});

Scenario('Name and role (large)', (I) => {
    searchWithinIframe(I, KIND, 'Name and role (large)', () => {
        I.see('Name and role (large)');
        I.seeNumberOfElements('.uir-avatar-title--lg', 1);
        I.dontSeeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.seeElement('.uir-avatar-title-job-role');
        I.see('Delivery Manager');
    });
});

Scenario('Name, role and profile (large)', (I) => {
    searchWithinIframe(I, KIND, 'Name, role and profile (large)', () => {
        I.see('Name, role and profile (large)');
        I.seeNumberOfElements('.uir-avatar-title--lg', 1);
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-title-name');
        I.see('Jane Smith');
        I.seeElement('.uir-avatar-title-job-role');
        I.see('Delivery Manager');
    });
});
