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
        I.seeNumberOfElements('td', 4 * 4);
    });
});

Scenario('Tabs', (I) => {
    I.searchWithinIframe(KIND, 'Overview', () => {
        I.seeNumberOfElements('.uir-tabs', 1);
        I.seeNumberOfElements('.uir-tabs-nav', 1);
        I.seeNumberOfElements('.uir-tabs-tab', 3);
        I.seeNumberOfElements('.uir-button--active', 1);
        I.see('TAB ONE', '.uir-button--active');
        I.seeNumberOfElements('.uir-tabs-panes', 1);
        I.seeNumberOfElements('.uir-tabs-pane', 3);
        I.see('Content 1', '.uir-tabs-pane');
        I.dontSee('Content 2', '.uir-tabs-pane');
    });
});

Scenario('Preselected', (I) => {
    I.searchWithinIframe(KIND, 'Preselected', () => {
        I.seeElement('.uir-tabs');
        I.seeNumberOfElements('.uir-button--active', 1);
        I.see('TAB TWO', '.uir-button--active');
        I.see('Content 2', '.uir-tabs-pane');

        I.click('.uir-tabs-tab:first-child');
        I.wait(0.5);
        I.see('TAB ONE', '.uir-button--active');
        I.see('Content 1', '.uir-tabs-pane');
    });
});

Scenario('With dropdown', (I) => {
    I.searchWithinIframe(KIND, 'With dropdown', () => {
        I.seeElement('.uir-tabs');
        I.seeNumberOfElements('.uir-tabs', 2);
        I.seeElement('.uir-tabs-nav-dropdown');
        I.seeElement('.uir-tabs-nav-dropdown-trigger');
        I.dontSeeElement('.uir-tabs-nav-dropdown-menu');
        I.see('TAB TWO', '.uir-tabs-tab');
        I.dontSee('TAB THREE', '.uir-tabs-tab');

        I.click('.uir-tabs-nav-dropdown-trigger');
        I.seeElement('.uir-tabs-nav-dropdown-menu');
        I.see('TAB THREE', '.uir-tabs-tab');

        I.click('.uir-tabs-nav-dropdown-menu .uir-tabs-tab');
        I.wait(0.5);
        I.see('Content 3', '.uir-tabs-pane');
    });
});
