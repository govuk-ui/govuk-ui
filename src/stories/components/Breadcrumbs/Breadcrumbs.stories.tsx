import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "../../../components/Breadcrumbs";
import BreadcrumbItem from "../../../components/BreadcrumbItem";
import React from "react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const primary: Story = {
  name: 'Back link',
  args: {
    children: [
        <BreadcrumbItem>
          <a href="#" className="govuk-breadcrumbs__link">Home</a>
        </BreadcrumbItem>,
        <BreadcrumbItem>
          <a href="#" className="govuk-breadcrumbs__link">Passports, travel and living abroad</a>
        </BreadcrumbItem>,
        <BreadcrumbItem>
          <a href="#" className="govuk-breadcrumbs__link">Travel abroad</a>
        </BreadcrumbItem>,
    ]
  }
}

const collapseOnMobile: Story = {
  name: 'Back link collapse on mobile',
  args: {
    collapseOnMobile: true,
    children: [
      <BreadcrumbItem>
        <a href="#" className="govuk-breadcrumbs__link">Home</a>
      </BreadcrumbItem>,
      <BreadcrumbItem>
        <a href="#" className="govuk-breadcrumbs__link">Environment</a>
      </BreadcrumbItem>,
      <BreadcrumbItem>
        <a href="#" className="govuk-breadcrumbs__link">Rural and countryside</a>
      </BreadcrumbItem>,
      <BreadcrumbItem>
        <a href="#" className="govuk-breadcrumbs__link">Rural development and land management</a>
      </BreadcrumbItem>,
      <BreadcrumbItem>
        <a href="#" className="govuk-breadcrumbs__link">Economic growth in rural areas</a>
      </BreadcrumbItem>,
    ]
  }
}

export {
  primary,
  collapseOnMobile,
};
