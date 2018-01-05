/* global Feature, Scenario */

const KIND = 'Avatar.Avatar';

Feature('Avatar');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Avatar: Avatar');
        I.see('Overview', 'h2');
        I.see('Example', 'h3');
        I.see('Source Code', 'h3');
        I.seeElement('code');
        I.see('Variations', 'h3');
        I.see('Props', 'h3');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
        I.seeNumberOfElements('td', 12 * 4);
    });
});

Scenario('Avatar', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeNumberOfElements('.uir-avatar', 4);
        I.seeNumberOfElements('.uir-avatar--halo', 1);
        I.seeNumberOfElements('.uir-avatar-user-status svg', 1);
    });
});

Scenario('Avatar Clickable', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-avatar');
        I.click('#root');
        I.click('.uir-avatar', '.uir-tooltip');
        I.seeInPopup('hello!');
        I.acceptPopup();
    });
});
