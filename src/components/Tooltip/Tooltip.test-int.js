/* global Feature, Scenario  */
const searchWithinIframe = require('../../../test/codecept/utils/searchWithinIframe.js');

const KIND = 'Tooltip.Tooltip';

Feature('Tooltip');

Scenario('Wrapper', (I) => {
    searchWithinIframe(I, KIND, 'Wrapper', () => {
        I.see('Tooltip: Tooltip');
        I.see('Wrapper');
        I.see('Example');
        I.seeElement('.uir-tooltip');
        I.moveCursorTo('.uir-tooltip');
        I.seeElement('.uir-avatar-card');
        I.moveCursorTo('h1');
        I.dontSeeElement('.uir-avatar-card');
        I.see('Source Code');
        I.seeElement('code');
        I.see('Props');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
        I.seeNumberOfElements('td', 7 * 4);
    });
});

Scenario('Show', (I) => {
    searchWithinIframe(I, KIND, 'Show', () => {
        I.seeElement('.uir-tooltip');
        I.seeElement('.uir-tooltip-box');
    });
});

Scenario('Position', (I) => {
    searchWithinIframe(I, KIND, 'Position', () => {
        I.seeNumberOfElements('.uir-tooltip', 7);
        I.seeElement('.uir-tooltip--top-left');
        I.seeElement('.uir-tooltip--top-right');
        I.seeElement('.uir-tooltip--bottom-left');
        I.seeElement('.uir-tooltip--bottom-right');
    });
});
