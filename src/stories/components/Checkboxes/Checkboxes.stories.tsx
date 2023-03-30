import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Checkboxes from "../../../components/Checkboxes";
import {Legend} from "../../../layout";
import Typography from "../../../typography/Typography";
import {CheckboxItem, Hint, Input, Label} from "../../../components";

const meta: Meta<typeof Checkboxes> = {
  title: "Checkboxes",
  component: Checkboxes,
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

const primary: Story = {
  name: "default",
  render: (args) => (
    <Checkboxes name="waste">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Which types of waste do you transport?
      </Legend>
      <Hint>Select all that apply.</Hint>
      <CheckboxItem value="carcasses">
        <Label>Waste from animal carcasses</Label>
      </CheckboxItem>
      <CheckboxItem value="mines">
        <Label>Waste from mines or quarries</Label>
      </CheckboxItem>
      <CheckboxItem value="farm">
        <Label>Farm or agricultural waste</Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const withoutHeading: Story = {
  name: "Without heading",
  render: (args) => (
    <Checkboxes name="waste">
      <Legend>
        Which types of waste do you transport?
      </Legend>
      <Hint>Select all that apply.</Hint>
      <CheckboxItem value="carcasses">
        <Label>Waste from animal carcasses</Label>
      </CheckboxItem>
      <CheckboxItem value="mines">
        <Label>Waste from mines or quarries</Label>
      </CheckboxItem>
      <CheckboxItem value="farm">
        <Label>Farm or agricultural waste</Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const itemsWithHints: Story = {
  name: "Items with hint text",
  render: (args) => (
    <Checkboxes name="nationality">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        What is your nationality?
      </Legend>
      <Hint>
        If you have dual nationality, select all options that are relevant to you.
      </Hint>
      <CheckboxItem value="british">
        <Label>British</Label>
        <Hint>
          including English, Scottish, Welsh and Northern Irish
        </Hint>
      </CheckboxItem>
      <CheckboxItem value="irish">
        <Label>Irish</Label>
      </CheckboxItem>
      <CheckboxItem value="other">
        <Label>Citizen of another country</Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const noneOption: Story = {
  name: "None option",
  render: (args) => (
    <Checkboxes name="countries">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Will you be travelling to any of these countries?
      </Legend>
      <Hint>
        Select all countries that apply
      </Hint>
      <CheckboxItem value="france">
        <Label>France</Label>
      </CheckboxItem>
      <CheckboxItem value="portugal">
        <Label>Portgual</Label>
      </CheckboxItem>
      <CheckboxItem value="spain">
        <Label>Spain</Label>
      </CheckboxItem>
      <CheckboxItem divider>
        or
      </CheckboxItem>
      <CheckboxItem value="none" exclusive>
        <Label>No, I will not be travelling to any of these countries</Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const noneOptionError: Story = {
  name: "None option with error",
  render: (args) => (
    <Checkboxes
      name="countries"
      errorMessage="Select countries you will be travelling to, or select ‘No, I will not be travelling to any of these countries’"
      value={['france', 'none']}
    >
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Will you be travelling to any of these countries?
      </Legend>
      <Hint>
        Select all countries that apply
      </Hint>
      <CheckboxItem value="france">
        <Label>France</Label>
      </CheckboxItem>
      <CheckboxItem value="portugal">
        <Label>Portgual</Label>
      </CheckboxItem>
      <CheckboxItem value="spain">
        <Label>Spain</Label>
      </CheckboxItem>
      <CheckboxItem divider>
        or
      </CheckboxItem>
      <CheckboxItem value="none" exclusive>
        <Label>No, I will not be travelling to any of these countries</Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const conditional: Story = {
  name: "Conditional",
  render: (args) => (
    <Checkboxes name="contact">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        How would you like to be contacted?
      </Legend>
      <Hint>
        Select all options that are relevant to you.
      </Hint>
      <CheckboxItem value="email" conditional={
        <Input name="emailAddress" classes="govuk-!-width-one-third">
          <Label>Email address</Label>
        </Input>
      }>
        <Label>Email</Label>
      </CheckboxItem>
      <CheckboxItem value="phone">
        <Label>Phone</Label>
      </CheckboxItem>
      <CheckboxItem value="text">
        <Label>Text message</Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const small: Story = {
  name: "Conditional",
  render: (args) => (
    <Checkboxes name="organisation" classes="govuk-checkboxes--small">
      <Legend isPageHeading classes="govuk-fieldset__legend--m">
        Organisation
      </Legend>
      <CheckboxItem value="hmrc">
        <Label>HM Revenue and Customs (HMRC)</Label>
      </CheckboxItem>
      <CheckboxItem value="employment-tribunal">
        <Label>Employment Tribunal</Label>
      </CheckboxItem>
      <CheckboxItem value="MOD">
        <Label>Ministry of Defence</Label>
      </CheckboxItem>
      <CheckboxItem value="DfT">
        <Label>Department for Transport</Label>
      </CheckboxItem>
    </Checkboxes>
  )
};

const error: Story = {
  name: "Items with hint text",
  render: (args) => (
      <Checkboxes name="nationality" errorMessage="Select if you are British, Irish or a citizen of a different country">
        <Legend isPageHeading classes="govuk-fieldset__legend--l">
          What is your nationality?
        </Legend>
        <Hint>
          If you have dual nationality, select all options that are relevant to you.
        </Hint>
        <CheckboxItem value="british">
          <Label>British</Label>
          <Hint>
            including English, Scottish, Welsh and Northern Irish
          </Hint>
        </CheckboxItem>
        <CheckboxItem value="irish">
          <Label>Irish</Label>
        </CheckboxItem>
        <CheckboxItem value="other">
          <Label>Citizen of another country</Label>
        </CheckboxItem>
      </Checkboxes>
  )
};

export {
  primary,
  withoutHeading,
  itemsWithHints,
  noneOption,
  noneOptionError,
  conditional,
  small,
  error,
};
