/// <reference path="./src/testint_support/steps.d.ts" />

Feature('DemoComponent');

Scenario('test default demo component', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    within({frame: "#storybook-preview-iframe"}, () => {
        I.see('Custom title', '.ui-demo-component');
    });
});

Feature('StorySource');
Scenario('test existence of story source', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    within({frame: "#storybook-preview-iframe"}, () => {
        I.see('Story Source', 'h1');

    });
});

Feature('Action Logger');
Scenario('test existence of Action Logger and click', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    I.click('Action Logger');
});

Feature('Proptypes');
Scenario('test existence of Proptypes', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    within({frame: "#storybook-preview-iframe"}, () => {
        I.see('() => { }');
    });
});
