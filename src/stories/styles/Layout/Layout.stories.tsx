import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BackLink, Container, Grid, MainWrapper, Typography } from "../../..";

const meta: Meta = {
  title: "Layout",
};

export default meta;
type ContainerStory = StoryObj<typeof Container>;

const twoThirds: ContainerStory = {
  name: "Two thirds column",
  render: (_args) => (
    <Container>
      <BackLink href="#" />
      <MainWrapper>
        <Grid variant="row">
          <Grid variant="two-thirds">
            <Typography component="h1" variant="xl">
              Two-thirds column
            </Typography>
            <Typography>This is a paragraph inside a two-thirds wide column</Typography>
          </Grid>
        </Grid>
      </MainWrapper>
    </Container>
  ),
};

const twoThirdsOneThird: ContainerStory = {
  name: "Two thirds and one third column",
  render: (_args) => (
    <Container>
      <BackLink href="#" />
      <MainWrapper>
        <Grid variant="row">
          <Grid variant="two-thirds">
            <Typography component="h1" variant="xl">
              Two-thirds column
            </Typography>
            <Typography>This is a paragraph inside a two-thirds wide column</Typography>
          </Grid>
          <Grid variant="one-third">
            <Typography component="h2" variant="m">
              One third column
            </Typography>
            <Typography>This is a paragraph inside a one-third wide column</Typography>
          </Grid>
        </Grid>
      </MainWrapper>
    </Container>
  ),
};

const twoRows: ContainerStory = {
  name: "Two thirds and one third column",
  render: (_args) => (
    <Container>
      <BackLink href="#" />
      <MainWrapper>
        <Grid variant="row">
          <Grid variant="two-thirds">
            <Typography component="h1" variant="xl">
              Two-thirds column
            </Typography>
          </Grid>
        </Grid>
        <Grid variant="row">
          <Grid variant="two-thirds">
            <Typography component="h2" variant="l">
              Two-thirds column
            </Typography>
            <Typography>This is a lead paragraph inside a two-thirds wide column</Typography>
          </Grid>
          <Grid variant="one-third">
            <Typography component="h2" variant="m">
              One third column
            </Typography>
            <Typography>This is a paragraph inside a one-third wide column</Typography>
          </Grid>
        </Grid>
      </MainWrapper>
    </Container>
  ),
};

export { twoThirds, twoThirdsOneThird, twoRows };
