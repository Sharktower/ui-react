// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

Feature('IconButton');

Scenario('test button component with right icon', (I, mapper) => {
    const buttonContainer = '.uir-PrimaryButton';

    I.amOnPage(mapper.buttonComponent.primaryButtonDemo);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.seeElementInDOM(`${buttonContainer}`);
        I.click(`${buttonContainer}`);
    });
});
