import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Radios from "../../../components/Radios";
import RadioItem from "../../../components/RadioItem";
import Label from "../../../components/Label";
import Hint from "../../../components/Hint";
import Legend from "../../../layout/Legend";
import Typography from "../../../typography/Typography";
import Input from "../../../components/Input";

const meta: Meta<typeof Radios> = {
  title: "Radios",
  component: Radios,
};

export default meta;
type Story = StoryObj<typeof Radios>;

const withHeading: Story = {
  name: 'Where do you live',
  args: {
    name: 'whereDoYouLive',
    children: [
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Where do you live?
      </Legend>,
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>,
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>,
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>,
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>
    ]
  }
}

const withoutHeading: Story = {
  name: 'Where do you live without heading',
  args: {
    name: 'whereDoYouLive',
    children: [
      <Legend>
        Where do you live?
      </Legend>,
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>,
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>,
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>,
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>
    ]
  }
}

const inline: Story = {
  name: 'Inline radios',
  args: {
    name: 'changedName',
    classes: 'govuk-radios--inline',
    children: [
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Have you changed your name?
      </Legend>,
      <Hint>This includes changing your last name or spelling your name differently.</Hint>,
      <RadioItem value="yes">
        <Label>Yes</Label>
      </RadioItem>,
      <RadioItem value="no">
        <Label>No</Label>
      </RadioItem>,
    ]
  }
}

const withHint: Story = {
  name: 'Radio items with hint',
  args: {
    name: 'signInMethod',
    children: [
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        How do you want to sign in?
      </Legend>,
      <Hint>You’ll need an account to prove your identity and complete your Self Assessment.</Hint>,
      <RadioItem value="governmentGateway">
        <Label>Sign in with Government Gateway</Label>
        <Hint>You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.</Hint>
      </RadioItem>,
      <RadioItem value="verify">
        <Label>Sign in with GOV.UK Verify</Label>
        <Hint>You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.</Hint>
      </RadioItem>,
    ]
  }
}

const withDivider: Story = {
  name: 'Radio items with divider',
  args: {
    name: 'whereDoYouLive',
    children: [
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Where do you live?
      </Legend>,
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>,
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>,
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>,
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>,
      <RadioItem divider>or</RadioItem>,
      <RadioItem value="britishAbroad">
        <Label>I am a British citizen living abroad</Label>
      </RadioItem>
    ]
  }
}

const conditional: Story = {
  name: 'Radio items with conditional',
  render: (args) => (
    <Radios name="contact-preference">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        How would you prefer to be contacted?
      </Legend>
      <Hint>Select one option.</Hint>,
      <RadioItem value="email" conditional={
        <Input name="emailAddress" classes="govuk-!-width-one-third">
          <Label>Email address</Label>
        </Input>
      }>
        <Label>Email</Label>
      </RadioItem>
      <RadioItem value="phone">
        <Label>Phone</Label>
      </RadioItem>
      <RadioItem value="text">
        <Label>Text message</Label>
      </RadioItem>
    </Radios>
  ),
}

const small: Story = {
  name: 'Small radios',
  args: {
    name: 'filter',
    classes: 'govuk-radios--small',
    children: [
      <Legend isPageHeading classes="govuk-fieldset__legend--m">
        Filter
      </Legend>,
      <RadioItem value="monthly">
        <Label>Monthly</Label>
      </RadioItem>,
      <RadioItem value="yearly">
        <Label>Yearly</Label>
      </RadioItem>,
    ]
  }
}

const errors: Story = {
  name: 'Radios with error',
  args: {
    name: 'whereDoYouLive',
    errorMessage: 'Select the country where you live',
    children: [
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Where do you live?
      </Legend>,
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>,
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>,
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>,
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>
    ]
  }
}

const conditionalWithErrors: Story = {
  name: 'Radio items with conditional',
  render: (args) => (
    <Radios name="conditional-with-errors">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        How would you prefer to be contacted?
      </Legend>
      <Hint>Select one option.</Hint>,
      <RadioItem value="email" conditional={
        <Input name="emailAddress" classes="govuk-!-width-one-third" errorMessage="Email address cannot be blank">
          <Label>Email address</Label>
        </Input>
      }>
        <Label>Email</Label>
      </RadioItem>
      <RadioItem value="phone">
        <Label>Phone</Label>
      </RadioItem>
      <RadioItem value="text">
        <Label>Text message</Label>
      </RadioItem>
    </Radios>
  ),
}

export {
  withHeading,
  withoutHeading,
  inline,
  withHint,
  withDivider,
  conditional,
  small,
  errors,
  conditionalWithErrors,
};
