/* global Feature, Scenario  */

const KIND = 'Tooltip.TooltipBox';

Feature('TooltipBox');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Standard', () => {
        I.see('Tooltip: TooltipBox');
        I.see('Standard');
        I.see('Example');
        I.see('Source Code');
        I.seeElement('code');
        I.see('Props');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
        I.seeNumberOfElements('td', 4 * 4);
    });
});

Scenario('TooltipBox', (I) => {
    I.searchWithinIframe(KIND, 'Standard', () => {
        I.seeElement('.uir-tooltip-box');
    });
});
