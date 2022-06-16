import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "pijama-ui/components/Button/composed";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>ЯМы Кнопка TEXT</Button>
);

export const ButtonB2C = Template.bind({});
ButtonB2C.storyName = "Theme: b2c";

export const ButtonB2B = Template.bind({});
ButtonB2B.args = {
  theme: "b2b",
};
ButtonB2B.storyName = "Theme: b2b";
