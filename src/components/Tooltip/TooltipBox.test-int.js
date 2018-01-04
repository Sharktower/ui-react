/* global Feature, Scenario  */

const KIND = 'Tooltip.TooltipBox';

Feature('TooltipBox');

Scenario('Standard', (I) => {
    I.searchWithinIframe(KIND, 'Standard', () => {
        I.see('Tooltip: TooltipBox');
        I.see('Standard');
        I.see('Example');
        I.seeElement('.uir-tooltip-box.uir-tooltip-box--default');
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

// Scenario('Success', (I) => {
//     I.searchWithinIframe(KIND, 'Success', () => {
//         I.seeElement('.uir-tooltip-box.uir-tooltip-box--success');
//     });
// });
//
// Scenario('Error', (I) => {
//     I.searchWithinIframe(KIND, 'Error', () => {
//         I.seeElement('.uir-tooltip-box.uir-tooltip-box--error');
//     });
// });
