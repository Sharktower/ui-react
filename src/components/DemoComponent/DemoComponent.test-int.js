// / <reference path="./test/codecept/steps.d.ts" />

Feature('DemoComponent');

Scenario('test default demo component', (I, mapper) => {
    I.amOnPage(mapper.demoComponent.default);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.see('Custom title', '.ui-demo-component');
    });
});
