/* global Feature, Scenario */

const KIND = 'Fields.TextArea';

Feature('TextArea');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Fields: TextArea');
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
        I.seeNumberOfElements('td', 25 * 4);
    });
});

Scenario('TextArea', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeNumberOfElements('.uir-text-area', 1);
    });
});
