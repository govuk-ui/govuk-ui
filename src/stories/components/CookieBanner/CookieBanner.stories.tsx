import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Typography, CookieBanner, CookieBannerAction, CookieBannerMessage } from "../../..";

const meta: Meta<typeof CookieBanner> = {
  title: "CookieBanner",
  component: CookieBanner,
};

export default meta;
type Story = StoryObj<typeof CookieBanner>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <CookieBanner ariaLabel="Cookies on [name of service]">
      <CookieBannerMessage heading="Cookies on [name of service]">
        <Typography>We use some essential cookies to make this service work.</Typography>
        <Typography>
          We’d also like to use analytics cookies so we can understand how you use the service and
          make improvements.
        </Typography>
        <CookieBannerAction type="button" name="cookies" value="accept">
          Accept analytics cookies
        </CookieBannerAction>
        <CookieBannerAction type="button" name="cookies" value="reject">
          Reject analytics cookies
        </CookieBannerAction>
        <CookieBannerAction href="#">View cookies</CookieBannerAction>
      </CookieBannerMessage>
    </CookieBanner>
  ),
};

const insideForm: Story = {
  name: "default",
  render: (_args) => (
    <form method="POST">
      <CookieBanner ariaLabel="Cookies on [name of service]">
        <CookieBannerMessage heading="Cookies on [name of service]">
          <Typography>We use some essential cookies to make this service work.</Typography>
          <Typography>
            We’d also like to use analytics cookies so we can understand how you use the service and
            make improvements.
          </Typography>
          <CookieBannerAction type="button" name="cookies" value="accept">
            Accept analytics cookies
          </CookieBannerAction>
          <CookieBannerAction type="button" name="cookies" value="reject">
            Reject analytics cookies
          </CookieBannerAction>
          <CookieBannerAction href="#">View cookies</CookieBannerAction>
        </CookieBannerMessage>
      </CookieBanner>
    </form>
  ),
};

const confirmationMessage: Story = {
  name: "default",
  render: (_args) => (
    <form method="POST">
      <CookieBanner ariaLabel="Cookies on [name of service]">
        <CookieBannerMessage>
          <Typography>
            You’ve accepted additional cookies. You can{" "}
            <a className="govuk-link" href="#">
              change your cookie settings
            </a>{" "}
            at any time.
          </Typography>
          <CookieBannerAction type="button" href="#">
            Hide cookie message
          </CookieBannerAction>
        </CookieBannerMessage>
      </CookieBanner>
    </form>
  ),
};

const hiddenMessages: Story = {
  name: "default",
  render: (_args) => (
    <CookieBanner ariaLabel="Cookies on [name of service]">
      <CookieBannerMessage heading="Cookies on [name of service]">
        <Typography>We use some essential cookies to make this service work.</Typography>
        <Typography>
          We’d also like to use analytics cookies so we can understand how you use the service and
          make improvements.
        </Typography>
        <CookieBannerAction type="button" name="cookies" value="accept">
          Accept analytics cookies
        </CookieBannerAction>
        <CookieBannerAction type="button" name="cookies" value="reject">
          Reject analytics cookies
        </CookieBannerAction>
        <CookieBannerAction href="#">View cookies</CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage hidden>
        <Typography>
          You’ve accepted additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage hidden>
        <Typography>
          You’ve rejected additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
    </CookieBanner>
  ),
};

const hiddenMessageShown: Story = {
  name: "default",
  render: (_args) => (
    <CookieBanner ariaLabel="Cookies on [name of service]">
      <CookieBannerMessage heading="Cookies on [name of service]" hidden>
        <Typography>We use some essential cookies to make this service work.</Typography>
        <Typography>
          We’d also like to use analytics cookies so we can understand how you use the service and
          make improvements.
        </Typography>
        <CookieBannerAction type="button" name="cookies" value="accept">
          Accept analytics cookies
        </CookieBannerAction>
        <CookieBannerAction type="button" name="cookies" value="reject">
          Reject analytics cookies
        </CookieBannerAction>
        <CookieBannerAction href="#">View cookies</CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage>
        <Typography>
          You’ve accepted additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage hidden>
        <Typography>
          You’ve rejected additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
    </CookieBanner>
  ),
};

const alertRole: Story = {
  name: "default",
  render: (_args) => (
    <CookieBanner ariaLabel="Cookies on [name of service]">
      <CookieBannerMessage heading="Cookies on [name of service]">
        <Typography>We use some essential cookies to make this service work.</Typography>
        <Typography>
          We’d also like to use analytics cookies so we can understand how you use the service and
          make improvements.
        </Typography>
        <CookieBannerAction type="button" name="cookies" value="accept">
          Accept analytics cookies
        </CookieBannerAction>
        <CookieBannerAction type="button" name="cookies" value="reject">
          Reject analytics cookies
        </CookieBannerAction>
        <CookieBannerAction href="#">View cookies</CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage hidden role="alert">
        <Typography>
          You’ve accepted additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage hidden role="alert">
        <Typography>
          You’ve rejected additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
    </CookieBanner>
  ),
};

const alertRoleAccepted: Story = {
  name: "default",
  render: (_args) => (
    <CookieBanner ariaLabel="Cookies on [name of service]">
      <CookieBannerMessage heading="Cookies on [name of service]" hidden>
        <Typography>We use some essential cookies to make this service work.</Typography>
        <Typography>
          We’d also like to use analytics cookies so we can understand how you use the service and
          make improvements.
        </Typography>
        <CookieBannerAction type="button" name="cookies" value="accept">
          Accept analytics cookies
        </CookieBannerAction>
        <CookieBannerAction type="button" name="cookies" value="reject">
          Reject analytics cookies
        </CookieBannerAction>
        <CookieBannerAction href="#">View cookies</CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage role="alert">
        <Typography>
          You’ve accepted additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage hidden role="alert">
        <Typography>
          You’ve rejected additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
    </CookieBanner>
  ),
};

const alertRoleRejected: Story = {
  name: "default",
  render: (_args) => (
    <CookieBanner ariaLabel="Cookies on [name of service]">
      <CookieBannerMessage heading="Cookies on [name of service]" hidden>
        <Typography>We use some essential cookies to make this service work.</Typography>
        <Typography>
          We’d also like to use analytics cookies so we can understand how you use the service and
          make improvements.
        </Typography>
        <CookieBannerAction type="button" name="cookies" value="accept">
          Accept analytics cookies
        </CookieBannerAction>
        <CookieBannerAction type="button" name="cookies" value="reject">
          Reject analytics cookies
        </CookieBannerAction>
        <CookieBannerAction href="#">View cookies</CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage hidden role="alert">
        <Typography>
          You’ve accepted additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
      <CookieBannerMessage role="alert">
        <Typography>
          You’ve rejected additional cookies. You can{" "}
          <a className="govuk-link" href="#">
            change your cookie settings
          </a>{" "}
          at any time.
        </Typography>
        <CookieBannerAction href="#" type="button">
          Hide cookie message
        </CookieBannerAction>
      </CookieBannerMessage>
    </CookieBanner>
  ),
};

const nonEssential: Story = {
  name: "default",
  render: (_args) => (
    <CookieBanner ariaLabel="Cookies on [name of service]">
      <CookieBannerMessage heading="Cookies on [name of service]">
        <Typography>We use some essential cookies to make this service work.</Typography>
        <Typography>
          We’d like to set additional cookies so we can remember your settings, understand how
          people use the service and make improvements.
        </Typography>
        <CookieBannerAction type="button" name="cookies" value="accept">
          Accept additional cookies
        </CookieBannerAction>
        <CookieBannerAction type="button" name="cookies" value="reject">
          Reject additional cookies
        </CookieBannerAction>
        <CookieBannerAction href="#">View cookies</CookieBannerAction>
      </CookieBannerMessage>
    </CookieBanner>
  ),
};

export {
  primary,
  insideForm,
  confirmationMessage,
  hiddenMessages,
  hiddenMessageShown,
  alertRole,
  alertRoleAccepted,
  alertRoleRejected,
  nonEssential,
};
