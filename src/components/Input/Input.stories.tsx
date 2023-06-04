import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DesignSystem/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} labelText="Label" placeholder="Placeholder" />
);

export const Default = Template.bind({});
Default.args = {
  inputName: "default",
};

export const Error = Template.bind({});
Error.args = {
  inputName: "error",
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  inputName: "disabled",
  disabled: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  inputName: "helperText",
  helperText: "Some interesting text",
};

export const HelperTextError = Template.bind({});
HelperTextError.args = {
  inputName: "helperTextError",
  helperText: "Some interesting text",
  error: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  inputName: "startIcon",
  startIcon: "phone",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  inputName: "EndIcon",
  endIcon: "lock",
};

export const InputValue = Template.bind({});
InputValue.args = {
  inputName: "InputValue",
  value: "Text",
};

export const InputSmall = Template.bind({});
InputSmall.args = {
  inputName: "small",
  size: "sm",
};

export const InputMedium = Template.bind({});
InputMedium.args = {
  inputName: "medium",
  size: "md",
};

export const InputFullWidth = Template.bind({});
InputFullWidth.args = {
  inputName: "medium",
  fullWidth: true,
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  inputName: "multiline",
  multiline: true,
  row: 4,
};
