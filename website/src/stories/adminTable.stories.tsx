import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";
import AdminUsersTable from "../components/table/adminUsersTable";

export default {
  title: "AdminTable",
  component: AdminUsersTable,
};

const Template: Story<ComponentProps<typeof AdminUsersTable>> = (args) => (
  <AdminUsersTable {...args} />
);

export const AdminTableStory = Template.bind({});
AdminTableStory.args = {
  data: [
    {
      email: "s-jizhang@lwsd.org",
      firstName: "Jason",
      lastName: "Zhang",
      graduationYear: "2021",
    },
  ],
};
