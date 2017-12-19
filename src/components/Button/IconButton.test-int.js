// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

Feature('IconButton');

Scenario('test button component with right icon', (I, mapper) => {
    const buttonContainer = '.uir-IconButton';
    const arrowIcon = 'svg.uir-icon-arrow';

    I.amOnPage(mapper.buttonComponent.iconButtonDemo);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.seeElementInDOM(`${buttonContainer} ${arrowIcon}`);
        I.click(`${buttonContainer}`);
    });
});
