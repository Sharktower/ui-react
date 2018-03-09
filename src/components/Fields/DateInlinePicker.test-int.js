/* global Feature, Scenario */

const KIND = 'Fields.DateInlinePicker';

Feature('DateInlinePicker');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Fields: DateInlinePicker');
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

Scenario('DateInlinePicker', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-date-inline-picker');
    });
});
