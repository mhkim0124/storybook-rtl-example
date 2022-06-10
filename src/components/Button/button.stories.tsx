import type { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import type { ButtonProps } from "./button";
import Button from "./button";

// A
export default {
  component: Button,
  title: "Button",
};

// B
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// C
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: "default",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  text: "disabled",
  isDisabled: true,
};
