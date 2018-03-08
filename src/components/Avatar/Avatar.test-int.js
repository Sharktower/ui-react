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
    });
});

Scenario('Avatar', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar--halo');
        I.seeElement('.uir-avatar-icon svg');
    });
});
