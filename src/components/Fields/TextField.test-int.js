/* global Feature, Scenario */

const KIND = 'Fields.TextField';

Feature('TextField');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Fields: TextField');
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
        I.seeNumberOfElements('td', 27 * 4);
    });
});

Scenario('TextField', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeNumberOfElements('.uir-text-field', 1);
    });
});
