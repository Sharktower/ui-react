// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

Feature('ButtonComponent');

Scenario('default button should render and be clickable', (I, mapper) => {
    const buttonContainer = '.uir-Button';

    I.amOnPage(mapper.buttonComponent.buttonDemo);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.see('CUSTOM LABEL', buttonContainer);
        I.click(buttonContainer);
    });
});
