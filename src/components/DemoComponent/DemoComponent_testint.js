/// <reference path="./src/testint_support/steps.d.ts" />

Feature('DemoComponent');

Scenario('test demo component', (I) => {
    I.amOnPage('/?selectedKind=DemoComponent&selectedStory=default');
    within({frame: "#storybook-preview-iframe"}, () => {
        I.see('Demo', '.ui-demo-component');
    });
});
