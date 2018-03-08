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
    });
});

Scenario('Button', (I) => {
    const buttonSelector = '.uir-button';

    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement(buttonSelector);
        I.see('CUSTOM LABEL', buttonSelector);
        I.seeElement('.uir-button--disabled');
        I.seeElement('.uir-button--active');
        I.seeElement('.uir-button--clear');
        I.seeElement('.uir-button--primary');
        I.seeElement('.uir-button--icon-left');
        I.seeElement('.uir-button--round');
    });
});
