/* global Feature, Scenario */
// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

const KIND = 'Button';

Feature('Button');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Button', 'h1');
        I.see('Overview', 'h2');
        I.see('Example', 'h3');
        I.see('Source Code', 'h3');
        I.seeElement('code');
        I.see('Variations', 'h3');
        I.see('Props', 'h3');
        I.seeElement('table');
        I.see('property');
        I.see('value');
        I.see('required');
        I.see('default');
        I.seeNumberOfElements('td', 17 * 4);
    });
});

Scenario('Button', (I) => {
    const buttonSelector = '.uir-button';

    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeNumberOfElements(buttonSelector, 8);
        I.see('CUSTOM LABEL', buttonSelector);
        I.seeNumberOfElements('.uir-button--disabled', 1);
        I.seeNumberOfElements('.uir-button--active', 1);
        I.seeNumberOfElements('.uir-button--clear', 1);
        I.seeNumberOfElements('.uir-button--primary', 1);
        I.seeNumberOfElements('.uir-button--icon-left', 2);
        I.seeNumberOfElements('.uir-button--round', 1);
    });
});

Scenario('Button Clickable', (I) => {
    const buttonSelector = '.uir-button';

    I.searchWithinIframe(KIND, 'Overview', () => {
        I.click(buttonSelector);
        I.seeInPopup('it works!');
        I.acceptPopup();
    });
});
