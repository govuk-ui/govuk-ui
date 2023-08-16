import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  Container,
  CookieBanner,
  CookieBannerAction,
  CookieBannerMessage,
  Footer,
  FooterMeta,
  FooterMetaItem,
  Header,
  MainWrapper,
  PhaseBanner,
  SkipLink,
  Typography,
} from "../../..";

const meta: Meta = {
  title: "Layout",
};

export default meta;
type ContainerStory = StoryObj<typeof Container>;

const primary: ContainerStory = {
  name: "Default page template",
  render: (_args) => (
    <html lang="en" className="govuk-template">
      <body className="govuk-template__body">
        <SkipLink />
        <Header />
        <Container>
          <MainWrapper>
            <Typography component="h1" variant="xl">
              Default page template
            </Typography>
          </MainWrapper>
        </Container>
        <Footer />
      </body>
    </html>
  ),
};

const customised: ContainerStory = {
  name: "Customised page template",
  render: (_args) => (
    <html lang="en" className="govuk-template">
      <body className="govuk-template__body">
        <CookieBanner>
          <CookieBannerMessage heading="Cookies on [name of service]">
            <Typography>We use some essential cookies to make this service work.</Typography>
            <Typography>
              We’d also like to use analytics cookies so we can understand how you use the service
              and make improvements.
            </Typography>
            <CookieBannerAction name="cookies" type="button" value="accept">
              Accept analytics cookies
            </CookieBannerAction>
            <CookieBannerAction name="cookies" type="button" value="reject">
              Reject analytics cookies
            </CookieBannerAction>
            <CookieBannerAction href="#">View cookies</CookieBannerAction>
          </CookieBannerMessage>
        </CookieBanner>
        <SkipLink />
        <Header serviceName="Service name" />
        <Container>
          <PhaseBanner phase={"Alpha"}>
            This is a new service – your&nbsp;
            <a className="govuk-link" href="/feedback">
              feedback
            </a>
            &nbsp;will help us to improve it.
          </PhaseBanner>
          <MainWrapper>
            <Typography component="h1" variant="xl">
              Customised page template
            </Typography>
          </MainWrapper>
        </Container>
        <Footer>
          <FooterMeta>
            <FooterMetaItem href="#">Help</FooterMetaItem>
            <FooterMetaItem href="#">Cookies</FooterMetaItem>
            <FooterMetaItem href="#">Contact</FooterMetaItem>
            <FooterMetaItem href="#">Terms and conditions</FooterMetaItem>
          </FooterMeta>
        </Footer>
      </body>
    </html>
  ),
};

export { primary, customised };
