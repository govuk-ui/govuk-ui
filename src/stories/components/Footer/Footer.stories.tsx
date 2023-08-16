import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  Footer,
  FooterMeta,
  FooterNavigation,
  FooterNavigationItem,
  FooterMetaItem,
} from "../../../components";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

const primary: Story = {
  name: "default",
};

const withLinks: Story = {
  name: "with links",
  render: (_args) => (
    <Footer>
      <FooterMeta>
        <FooterMetaItem href="#">Item 1</FooterMetaItem>
        <FooterMetaItem href="#">Item 2</FooterMetaItem>
        <FooterMetaItem href="#">Item 3</FooterMetaItem>
      </FooterMeta>
    </Footer>
  ),
};

const secondaryNavigation: Story = {
  name: "secondary navigation",
  render: (_args) => (
    <Footer>
      <FooterNavigation title="Two column list" width="two-thirds" columns={2}>
        <FooterNavigationItem href="#">Navigation item 1</FooterNavigationItem>
        <FooterNavigationItem href="#">Navigation item 2</FooterNavigationItem>
        <FooterNavigationItem href="#">Navigation item 3</FooterNavigationItem>
        <FooterNavigationItem href="#">Navigation item 4</FooterNavigationItem>
        <FooterNavigationItem href="#">Navigation item 5</FooterNavigationItem>
        <FooterNavigationItem href="#">Navigation item 6</FooterNavigationItem>
      </FooterNavigation>
      <FooterNavigation title="Single column list" width="one-third">
        <FooterNavigationItem href="#">Navigation item 1</FooterNavigationItem>
        <FooterNavigationItem href="#">Navigation item 2</FooterNavigationItem>
        <FooterNavigationItem href="#">Navigation item 3</FooterNavigationItem>
      </FooterNavigation>
    </Footer>
  ),
};

const linksAndSecondaryNavigation: Story = {
  name: "lnks and secondary navigation",
  render: (_args) => (
    <Footer>
      <FooterNavigation title="Services and information" width="two-thirds" columns={2}>
        <FooterNavigationItem href="#">Benefits</FooterNavigationItem>
        <FooterNavigationItem href="#">Births, deaths, marriages and care</FooterNavigationItem>
        <FooterNavigationItem href="#">Business and self-employed</FooterNavigationItem>
        <FooterNavigationItem href="#">Childcare and parenting</FooterNavigationItem>
        <FooterNavigationItem href="#">Citizenship and living in the UK</FooterNavigationItem>
        <FooterNavigationItem href="#">Crime, justice and the law</FooterNavigationItem>
        <FooterNavigationItem href="#">Disabled people</FooterNavigationItem>
        <FooterNavigationItem href="#">Driving and transport</FooterNavigationItem>
        <FooterNavigationItem href="#">Education and learning</FooterNavigationItem>
        <FooterNavigationItem href="#">Employing people</FooterNavigationItem>
        <FooterNavigationItem href="#">Environment and countryside</FooterNavigationItem>
        <FooterNavigationItem href="#">Housing and local services</FooterNavigationItem>
        <FooterNavigationItem href="#">Money and tax</FooterNavigationItem>
        <FooterNavigationItem href="#">Passports, travel and living abroad</FooterNavigationItem>
        <FooterNavigationItem href="#">Visas and immigration</FooterNavigationItem>
        <FooterNavigationItem href="#">Working, jobs and pensions</FooterNavigationItem>
      </FooterNavigation>
      <FooterNavigation title="Departments and policy" width="one-third">
        <FooterNavigationItem href="#">How government works</FooterNavigationItem>
        <FooterNavigationItem href="#">Departments</FooterNavigationItem>
        <FooterNavigationItem href="#">Worldwide</FooterNavigationItem>
        <FooterNavigationItem href="#">Policies</FooterNavigationItem>
        <FooterNavigationItem href="#">Publications</FooterNavigationItem>
        <FooterNavigationItem href="#">Announcements</FooterNavigationItem>
      </FooterNavigation>
      <FooterMeta>
        <FooterMetaItem href="#">Help</FooterMetaItem>
        <FooterMetaItem href="#">Cookies</FooterMetaItem>
        <FooterMetaItem href="#">Contact</FooterMetaItem>
        <FooterMetaItem href="#">Terms and conditions</FooterMetaItem>
        <FooterMetaItem href="#">Rhestr o Wasanaethau Cymraeg</FooterMetaItem>
        Built by the&nbsp;
        <a href="#" className="govuk-footer__link">
          Government Digital Service
        </a>
      </FooterMeta>
    </Footer>
  ),
};

export { primary, withLinks, secondaryNavigation, linksAndSecondaryNavigation };
