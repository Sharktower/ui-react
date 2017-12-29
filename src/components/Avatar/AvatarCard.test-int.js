/* global Feature, Scenario  */
const searchWithinIframe = require('../../../test/codecept/utils/searchWithinIframe.js');

const KIND = 'Avatar.AvatarCard';

Feature('AvatarCard');

Scenario('Overview', (I) => {
    searchWithinIframe(I, KIND, 'Overview', () => {
        I.see('Avatar: AvatarCard');
        I.see('Overview');
        I.see('Example');
        I.seeElement('.uir-avatar-card');
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.seeElement('.uir-avatar-card-job-role');
        I.see('Sales Manager');
        I.seeElement('.uir-avatar-card-team');
        I.see('Communication Team');
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
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.dontSeeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.dontSeeElement('.uir-avatar-card-job-role');
        I.dontSeeElement('.uir-avatar-card-team');
    });
});

Scenario('Name and profile', (I) => {
    searchWithinIframe(I, KIND, 'Name and profile', () => {
        I.see('Name and profile');
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.dontSeeElement('.uir-avatar-card-job-role');
        I.dontSeeElement('.uir-avatar-card-team');
    });
});

Scenario('Name and role', (I) => {
    searchWithinIframe(I, KIND, 'Name and role', () => {
        I.see('Name and role');
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.dontSeeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.seeElement('.uir-avatar-card-job-role');
        I.see('Sales Manager');
        I.dontSeeElement('.uir-avatar-card-team');
    });
});

Scenario('Name, role and profile', (I) => {
    searchWithinIframe(I, KIND, 'Name, role and profile', () => {
        I.see('Name, role and profile');
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.seeElement('.uir-avatar-card-job-role');
        I.see('Sales Manager');
        I.dontSeeElement('.uir-avatar-card-team');
    });
});

Scenario('Name and team', (I) => {
    searchWithinIframe(I, KIND, 'Name and team', () => {
        I.see('Name and team');
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.dontSeeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.dontSeeElement('.uir-avatar-card-job-role');
        I.seeElement('.uir-avatar-card-team');
        I.see('Communication Team');
    });
});

Scenario('Name, team and profile', (I) => {
    searchWithinIframe(I, KIND, 'Name, team and profile', () => {
        I.see('Name, team and profile');
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.dontSeeElement('.uir-avatar-card-job-role');
        I.seeElement('.uir-avatar-card-team');
        I.see('Communication Team');
    });
});

Scenario('Name, role and team', (I) => {
    searchWithinIframe(I, KIND, 'Name, role and team', () => {
        I.see('Name, role and team');
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.dontSeeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.seeElement('.uir-avatar-card-job-role');
        I.see('Sales Manager');
        I.seeElement('.uir-avatar-card-team');
        I.see('Communication Team');
    });
});

Scenario('Name, role, team and profile', (I) => {
    searchWithinIframe(I, KIND, 'Name, role, team and profile', () => {
        I.see('Name, role, team and profile');
        I.seeNumberOfElements('.uir-avatar-card', 1);
        I.seeElement('.uir-avatar');
        I.seeElement('.uir-avatar-card-name');
        I.see('David Smith');
        I.seeElement('.uir-avatar-card-job-role');
        I.see('Sales Manager');
        I.seeElement('.uir-avatar-card-team');
        I.see('Communication Team');
    });
});
