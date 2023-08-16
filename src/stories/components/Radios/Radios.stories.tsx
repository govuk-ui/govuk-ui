import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Radios, RadioItem, Label, Hint, Legend, Input } from "../../..";

const meta: Meta<typeof Radios> = {
  title: "Radios",
  component: Radios,
};

export default meta;
type Story = StoryObj<typeof Radios>;

const withHeading: Story = {
  name: "Where do you live",
  render: (_args) => (
    <Radios name="whereDoYouLive">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Where do you live?
      </Legend>
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>
    </Radios>
  ),
};

const withoutHeading: Story = {
  name: "Where do you live without heading",
  render: (_args) => (
    <Radios name="whereDoYouLive">
      <Legend>Where do you live?</Legend>
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>
    </Radios>
  ),
};

const inline: Story = {
  name: "Inline radios",
  render: (_args) => (
    <Radios name="changedName" classes="govuk-radios--inline">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Have you changed your name?
      </Legend>
      <Hint>This includes changing your last name or spelling your name differently.</Hint>
      <RadioItem value="yes">
        <Label>Yes</Label>
      </RadioItem>
      <RadioItem value="no">
        <Label>No</Label>
      </RadioItem>
    </Radios>
  ),
};

const withHint: Story = {
  name: "Radio items with hint",
  render: (_args) => (
    <Radios name="signInMethod">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        How do you want to sign in?
      </Legend>
      <Hint>You’ll need an account to prove your identity and complete your Self Assessment.</Hint>
      <RadioItem value="governmentGateway">
        <Label>Sign in with Government Gateway</Label>
        <Hint>
          You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return
          online before.
        </Hint>
      </RadioItem>
      <RadioItem value="verify">
        <Label>Sign in with GOV.UK Verify</Label>
        <Hint>
          You’ll have an account if you’ve already proved your identity with either Barclays,
          CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
        </Hint>
      </RadioItem>
    </Radios>
  ),
};

const withDivider: Story = {
  name: "Radio items with divider",
  render: (_args) => (
    <Radios name="whereDoYouLive">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        Where do you live?
      </Legend>
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>
      <RadioItem divider>or</RadioItem>
      <RadioItem value="britishAbroad">
        <Label>I am a British citizen living abroad</Label>
      </RadioItem>
    </Radios>
  ),
};

const conditional: Story = {
  name: "Radio items with conditional",
  render: (_args) => (
    <Radios name="contact-preference">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        How would you prefer to be contacted?
      </Legend>
      <Hint>Select one option.</Hint>
      <RadioItem
        value="email"
        conditional={
          <Input name="emailAddress" classes="govuk-!-width-one-third">
            <Label>Email address</Label>
          </Input>
        }
      >
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
};

const small: Story = {
  name: "Small radios",
  render: (_args) => (
    <Radios name="filter" classes="govuk-radios--small">
      <Legend isPageHeading classes="govuk-fieldset__legend--m">
        Filter
      </Legend>
      <RadioItem value="monthly">
        <Label>Monthly</Label>
      </RadioItem>
      <RadioItem value="yearly">
        <Label>Yearly</Label>
      </RadioItem>
    </Radios>
  ),
};

const errors: Story = {
  name: "Radios with error",
  render: (_args) => (
    <Radios name="whereDoYouLive" errorMessage="Select the country where you live">
      <Legend>Where do you live?</Legend>
      <RadioItem value="england">
        <Label>England</Label>
      </RadioItem>
      <RadioItem value="scotland">
        <Label>Scotland</Label>
      </RadioItem>
      <RadioItem value="wales">
        <Label>Wales</Label>
      </RadioItem>
      <RadioItem value="northernIreland">
        <Label>Northern Ireland</Label>
      </RadioItem>
    </Radios>
  ),
};

const conditionalWithErrors: Story = {
  name: "Radio items with conditional",
  render: (_args) => (
    <Radios name="conditional-with-errors">
      <Legend isPageHeading classes="govuk-fieldset__legend--l">
        How would you prefer to be contacted?
      </Legend>
      <Hint>Select one option.</Hint>,
      <RadioItem
        value="email"
        conditional={
          <Input
            name="emailAddress"
            classes="govuk-!-width-one-third"
            errorMessage="Email address cannot be blank"
          >
            <Label>Email address</Label>
          </Input>
        }
      >
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
};

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
