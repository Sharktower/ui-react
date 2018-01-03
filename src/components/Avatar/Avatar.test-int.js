/* global Feature, Scenario */
const searchWithinIframe = require('../../../test/codecept/utils/searchWithinIframe.js');

const KIND = 'Avatar.Avatar';

Feature('Avatar');

Scenario('Overview', (I) => {
    searchWithinIframe(I, KIND, 'Overview', () => {
        I.see('Avatar: Avatar');
        I.see('Overview');
        I.see('Example');
        I.seeElement('.uir-avatar');
        I.see('DS');
        I.see('Source Code');
        I.seeElement('code');
        I.see('Props');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
        I.seeNumberOfElements('td', 12 * 4);
    });
});

Scenario('Initials', (I) => {
    searchWithinIframe(I, KIND, 'Initials', () => {
        I.see('Initials');
        I.see('Variations');
        I.seeNumberOfElements('.uir-avatar', 3);
    });
});

Scenario('Image', (I) => {
    searchWithinIframe(I, KIND, 'Image', () => {
        I.see('Image');
        I.seeNumberOfElements('.uir-avatar', 5);
        I.seeElement('.uir-avatar--xs');
        I.seeElement('.uir-avatar--sm');
        I.seeElement('.uir-avatar--md');
        I.seeElement('.uir-avatar--lg');
    });
});

Scenario('Halo', (I) => {
    searchWithinIframe(I, KIND, 'Halo', () => {
        I.see('Halo');
        I.seeNumberOfElements('.uir-avatar--halo', 5);
        I.seeElement('.uir-avatar--xs');
        I.seeElement('.uir-avatar--sm');
        I.seeElement('.uir-avatar--md');
        I.seeElement('.uir-avatar--lg');
    });
});

Scenario('Theme', (I) => {
    searchWithinIframe(I, KIND, 'Theme', () => {
        I.see('Theme');
        I.seeNumberOfElements('.uir-avatar--dark', 4);
    });
});

Scenario('Status', (I) => {
    searchWithinIframe(I, KIND, 'Status', () => {
        I.see('Status');
        I.seeNumberOfElements('.uir-avatar', 4);
        I.seeNumberOfElements('.uir-avatar-user-status', 4);
        I.see('🦄');
        I.see('🌴');
        I.see('🤚');
        I.see('🤕');
        I.seeElement('.uir-avatar--xs');
        I.seeElement('.uir-avatar--sm');
        I.seeElement('.uir-avatar--md');
        I.seeElement('.uir-avatar--lg');
    });
});

Scenario('Notification', (I) => {
    searchWithinIframe(I, KIND, 'Notification', () => {
        I.see('Notification');
        I.seeNumberOfElements('.uir-avatar-user-status svg', 5);
        I.seeElement('.uir-avatar--xs');
        I.seeElement('.uir-avatar--sm');
        I.seeElement('.uir-avatar--md');
        I.seeElement('.uir-avatar--lg');
    });
});

Scenario('Clickable', (I) => {
    searchWithinIframe(I, KIND, 'Clickable', () => {
        I.see('Clickable');
        I.seeElement('.uir-avatar');
        I.click('.uir-avatar');
        I.seeInPopup('it works!');
        I.acceptPopup();
    });
});

Scenario('Clickable Key Press', (I) => {
    searchWithinIframe(I, KIND, 'Clickable', () => {
        I.see('Clickable');
        I.seeElement('.uir-avatar');
        I.click('.uir-avatar');
        I.acceptPopup();
        I.pressKey('Enter');
        I.seeInPopup('it works!');
        I.acceptPopup();
        I.pressKey('Space');
        I.seeInPopup('it works!');
        I.acceptPopup();
    });
});
