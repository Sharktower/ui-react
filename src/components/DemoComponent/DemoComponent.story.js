import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import DemoComponent from "./DemoComponent";

const stories = storiesOf("DemoComponent", module);

stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="ui-root-preview">{story()}</div>);

stories.add(
  "default",
  withInfo(`
        With a custom title
    `)(() => (
    <DemoComponent
      isDisabled={boolean("isDisabled", false)}
      title={text("title", "Custom title")}
      onClick={action("clicked")}
    >
      children
    </DemoComponent>
  ))
);

stories.add(
  "with title",
  withInfo(`
        With a custom title
    `)(() => <DemoComponent title="Custom title" />)
);

stories.add(
  "with emoji",
  withInfo()(() => (
    <DemoComponent onClick={action("clicked")}>😀 😎 👍 💯</DemoComponent>
  ))
);
