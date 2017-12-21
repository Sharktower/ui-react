// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

Feature('PrimaryButton');

Scenario('renders and is clickable', (I, mapper) => {
    const buttonContainer = '.uir-PrimaryButton';

    I.amOnPage(mapper.buttonComponent.primaryButtonDemo);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.seeElementInDOM(buttonContainer);
        I.click(buttonContainer);
    });
});
