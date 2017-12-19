// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

Feature('ButtonComponent');

Scenario('test default button component', (I, mapper) => {
    I.amOnPage(mapper.buttonComponent.default);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.see('CUSTOM LABEL', '.uir-Button');
        I.click('Custom label');
    });
});
