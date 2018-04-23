/* global Feature, Scenario */

const KIND = 'Breadcrumbs.Breadcrumbs';

Feature('Breadcrumbs');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Breadcrumbs: Breadcrumbs');
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
    });
});

Scenario('Breadcrumbs', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-breadcrumbs');
    });
});
