/* global Feature, Scenario */

const KIND = 'Tabs';

Feature('Tabs');

Scenario('Storybook Documentation', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.see('Tabs', 'h1');
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
    });
});

Scenario('Tabs', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeElement('.uir-tabs');
        I.seeElement('.uir-tabs-nav');
        I.seeElement('.uir-tabs-nav-item');
        I.seeElement('.uir-button--active');
        I.see('TAB ONE', '.uir-button--active');
        I.seeElement('.uir-tabs-panes');
        I.seeElement('.uir-tabs-pane');
        I.see('Content 1', '.uir-tabs-pane--selected');
        I.dontSee('Content 2', '.uir-tabs-pane--selected');
    });
});

Scenario('Preselected', (I) => {
    I.searchWithinIframe(KIND, 'Preselected', () => {
        I.seeElement('.uir-tabs');
        I.seeElement('.uir-button--active');
        I.see('TAB TWO', '.uir-button--active');
        I.see('Content 2', '.uir-tabs-pane');

        I.click('.uir-tabs-nav-item:first-child');
        I.wait(0.5);
        I.see('TAB ONE', '.uir-button--active');
        I.see('Content 1', '.uir-tabs-pane');
    });
});

Scenario('With dropdown', (I) => {
    I.searchWithinIframe(KIND, 'With a dropdown', () => {
        I.seeElement('.uir-tabs');
        I.seeElement('.uir-tabs');
        I.seeElement('.uir-tabs-nav-dropdown');
        I.seeElement('.uir-tabs-nav-dropdown-trigger');
        I.dontSeeElement('.uir-tabs-nav-dropdown-panel');
        I.see('TAB TWO', '.uir-tabs-nav-item');
        I.dontSee('TAB THREE', '.uir-tabs-nav-item');

        I.click('.uir-tabs-nav-dropdown-trigger');
        I.seeElement('.uir-tabs-nav-dropdown-panel');
        I.see('TAB THREE', '.uir-tabs-nav-item');

        I.click('.uir-tabs-nav-dropdown-panel .uir-tabs-nav-item');
        I.wait(0.5);
        I.see('Content 3', '.uir-tabs-pane');
    });
});
