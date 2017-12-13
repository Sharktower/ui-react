/// <reference path="./src/testint_support/steps.d.ts" />

Feature('ButtonComponent');

Scenario('test default button component', (I, mapper) => {
    I.amOnPage(mapper.buttonComponent.default);
    within({frame: "#storybook-preview-iframe"}, () => {
        I.see('CUSTOM LABEL', '.uir-button');
        I.click('Custom label');
    });
  }),

  Scenario('test button component with right icon', (I, mapper) => {
      I.amOnPage(mapper.buttonComponentRightIcon.righticon);
      within({frame: "#storybook-preview-iframe"}, () => {
          I.see('DROPDOWN', '.uir-button');
          I.click('Dropdown');
      });
  }),

  Scenario('test button component with right and left icon', (I, mapper) => {
      I.amOnPage(mapper.buttonComponentRightLeftIcon.rightlefticon);
      within({frame: "#storybook-preview-iframe"}, () => {
          I.see('DROPDOWN', '.uir-button');
          I.click('Dropdown');
      });
  });
