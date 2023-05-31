import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DesignSystem/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Default</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  variant: "text",
  disabled: true,
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  disabled: true,
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  disableShadow: true,
};

export const Small = Template.bind({});
Small.args = {
  sizes: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  sizes: "md",
};

export const Large = Template.bind({});
Large.args = {
  sizes: "lg",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  color: "primary",
  startIcon: "local_grocery_store",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  color: "primary",
  endIcon: "local_grocery_store",
};
