/* global Feature, Scenario  */
const searchWithinIframe = require('../../../test/codecept/utils/searchWithinIframe.js');

const KIND = 'Tooltip.TooltipBox';

Feature('TooltipBox');

Scenario('Standard', (I) => {
    searchWithinIframe(I, KIND, 'Standard', () => {
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

Scenario('Success', (I) => {
    searchWithinIframe(I, KIND, 'Success', () => {
        I.seeElement('.uir-tooltip-box.uir-tooltip-box--success');
    });
});

Scenario('Error', (I) => {
    searchWithinIframe(I, KIND, 'Error', () => {
        I.seeElement('.uir-tooltip-box.uir-tooltip-box--error');
    });
});
