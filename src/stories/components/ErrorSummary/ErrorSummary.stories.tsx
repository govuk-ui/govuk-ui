import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  BackLink, Button,
  Checkboxes,
  CheckboxItem,
  DateInput,
  ErrorSummary,
  ErrorSummaryMessage, Header, Hint,
  Input,
  Label
} from "../../../components";
import {Typography} from "../../../typography";
import {Container, Grid, Legend, MainWrapper} from "../../../layout";

const meta: Meta<typeof ErrorSummary> = {
  title: "ErrorSummary",
  component: ErrorSummary,
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

const primary: Story = {
  name: "default",
  render: (args) => (
    <ErrorSummary>
      <ErrorSummaryMessage id="#">The date your passport was issued must be in the past</ErrorSummaryMessage>
      <ErrorSummaryMessage id="#">Enter a postcode, like AA1 1AA</ErrorSummaryMessage>
    </ErrorSummary>
  )
};

const linking: Story = {
  name: "linking",
  render: (args) => (
    <>
      <ErrorSummary>
        <ErrorSummaryMessage id="full-name-input">
          Enter your full name
        </ErrorSummaryMessage>
      </ErrorSummary>
      <Typography component="h1" variant="l">Your details</Typography>
      <Input id="full-name-input" errorMessage="Enter your full name">
        <Label>
          Full name
        </Label>
      </Input>
    </>
  )
};

const linkingDateInput: Story = {
  name: "linking date input",
  render: (args) => (
    <>
      <ErrorSummary>
        <ErrorSummaryMessage id="passport-issued-year">
          Passport issue date must include a year
        </ErrorSummaryMessage>
      </ErrorSummary>
      <DateInput id="passport-issued" errorYear errorMessage="Passport issue date must include a year">
        <Legend isPageHeading classes="govuk-fieldset__legend--l">
          When was your passport issued?
        </Legend>
      </DateInput>
    </>
  )
};

const checkboxes: Story = {
  name: "checkboxes",
  render: (args) => (
    <>
      <ErrorSummary>
        <ErrorSummaryMessage id="nationality">
          Select if you are British, Irish or a citizen of a different country
        </ErrorSummaryMessage>
      </ErrorSummary>
      <Checkboxes name="nationality" errorMessage="Select if you are British, Irish or a citizen of a different country">
        <Legend isPageHeading classes="govuk-fieldset__legend--l">
          What is your nationality?
        </Legend>
        <Hint>
          If you have dual nationality, select all options that are relevant to you.
        </Hint>
        <CheckboxItem value="british">
          <Label>
            British
          </Label>
          <Hint>
            including English, Scottish, Welsh and Northern Irish
          </Hint>
        </CheckboxItem>
        <CheckboxItem value="irish">
          <Label>
            Irish
          </Label>
        </CheckboxItem>
        <CheckboxItem value="other">
          <Label>
            Citizen of another country
          </Label>
        </CheckboxItem>
      </Checkboxes>
    </>
  )
};

const fullPageExample: Story = {
  name: "checkboxes",
  render: (args) => (
    <body className="govuk-template__body govuk-background-grey">
      <div className="govuk-background-white">
        <Header serviceName="Service name" />
        <Container width>
          <Grid variant="row">
            <Grid variant="two-thirds">
              <BackLink href="#" />
              <MainWrapper>
                <ErrorSummary>
                  <ErrorSummaryMessage id="passport-issued-year">
                    Passport issue date must include a year
                  </ErrorSummaryMessage>
                </ErrorSummary>
                <DateInput id="passport-issued" errorYear errorMessage="Passport issue date must include a year">
                  <Legend isPageHeading classes="govuk-fieldset__legend--l">
                    When was your passport issued?
                  </Legend>
                </DateInput>
                <Button>
                  Continue
                </Button>
              </MainWrapper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </body>
  )
};

export {
  primary,
  linking,
  linkingDateInput,
  checkboxes,
  fullPageExample
};
