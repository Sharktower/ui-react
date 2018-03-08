/* global Feature, Scenario  */

const KIND = 'Tooltip.Tooltip';

Feature('Tooltip');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Wrapper', () => {
        I.see('Tooltip: Tooltip');
        I.see('Wrapper');
        I.see('Example');
        I.see('Source Code');
        I.seeElement('code');
        I.see('Props');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
    });
});

Scenario('Tooltip', (I) => {
    I.searchWithinIframe(KIND, 'Wrapper', () => {
        I.seeElement('.uir-tooltip');
        I.moveCursorTo('.uir-tooltip');
        I.seeElement('.uir-avatar-card');
    });
});
