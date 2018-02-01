/* global Feature, Scenario */

const KIND = 'TextField.DateField';

Feature('DateField');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('TextField: DateField');
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

Scenario('DateField', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeNumberOfElements('.uir-datefield', 1);
    });
});
