/* global Feature, Scenario, within */
// eslint-disable-next-line spaced-comment
/// path="../../../test/codecept/steps.d.ts"

Feature('IconButton');

Scenario('renders and is clickable', (I, mapper) => {
    const buttonContainer = '.uir-icon-button';
    const arrowIcon = 'svg.uir-icon-arrow';

    I.amOnPage(mapper.buttonComponent.iconButtonDemo);
    within({ frame: '#storybook-preview-iframe' }, () => {
        I.seeElementInDOM(`${buttonContainer} ${arrowIcon}`);
        I.click(buttonContainer);
        I.seeInPopup('it works!');
        I.acceptPopup();
    });
});
