import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/tailwind.out.css";

import Body from "../Components/Body/body";

export default {
  title: "Full Pages/foo",
  component: Body,
  argTypes: {},
} as Meta;

const Template: Story<{}> = () => (
  <Router>
    <div className="flex flex-col min-h-screen bg-eastlake-grey font-text">
      <Body />
    </div>
  </Router>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
