// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

Feature('Button');

Scenario('renders and is clickable', (I, mapper) => {
    const buttonContainer = '.uir-button';

    I.amOnPage(mapper.buttonComponent.buttonDemo);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.see('CUSTOM LABEL', buttonContainer);
        I.click(buttonContainer);
    });
});
