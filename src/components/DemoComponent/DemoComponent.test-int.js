// <reference path="./src/testint_support/steps.d.ts" />

Feature('DemoComponent');

Scenario('test default demo component', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.see('Custom title', '.ui-demo-component');
    });
});

Scenario('test existence of story source @ignore', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.see('Story Source', 'h1');
    });
});

Scenario('test existence of Action Logger and click @ignore', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    I.click('Action Logger');
});

Scenario('test existence of Proptypes @ignore', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.see('() => { }', null);
    });
});

Scenario('test existence of knob and isdisable checkbox @ignore', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    I.click('Knobs');
    I.checkOption('#isDisabled');
});
