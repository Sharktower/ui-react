/* global Feature, Scenario  */

const KIND = 'Avatar.AvatarCard';

Feature('AvatarCard');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Avatar: AvatarCard');
        I.see('Overview', 'h2');
        I.see('Example', 'h3');
        I.see('Source Code', 'h3');
        I.seeElement('code');
        I.see('Props', 'h3');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
        I.seeNumberOfElements('td', 6 * 4);
    });
});

Scenario('AvatarCard', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-avatar-card');
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.seeElement('.uir-avatar-card-job-role');
        I.see('Sales Manager');
        I.seeElement('.uir-avatar-card-team');
        I.see('Communication Team');
    });
});
