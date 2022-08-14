import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ColoredButton } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Examples/ColoredButton",
  component: ColoredButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof ColoredButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColoredButton> = (args) => (
  <ColoredButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Labeled = Template.bind({});
Labeled.args = { label: "やばい" };
