import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  SummaryList,
  SummaryListActions,
  SummaryListItem,
  SummaryListKey,
  SummaryListValue,
} from "../../../components";
import { Typography } from "../../../typography";

const meta: Meta<typeof SummaryList> = {
  title: "SummaryList",
  component: SummaryList,
};

export default meta;
type Story = StoryObj<typeof SummaryList>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <SummaryList>
      <SummaryListItem>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Address</SummaryListKey>
        <SummaryListValue>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <Typography>07700 900457</Typography>
          <Typography>sarah.phillips@example.com</Typography>
        </SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change
          </a>
        </SummaryListActions>
      </SummaryListItem>
    </SummaryList>
  ),
};

const visuallyHidden: Story = {
  name: "default",
  render: (_args) => (
    <SummaryList>
      <SummaryListItem>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change<span className="govuk-visually-hidden">&nbsp;name</span>
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change<span className="govuk-visually-hidden">&nbsp;date of birth</span>
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Address</SummaryListKey>
        <SummaryListValue>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change<span className="govuk-visually-hidden">&nbsp;address</span>
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <Typography>07700 900457</Typography>
          <Typography>sarah.phillips@example.com</Typography>
        </SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change<span className="govuk-visually-hidden">&nbsp;contact details</span>
          </a>
        </SummaryListActions>
      </SummaryListItem>
    </SummaryList>
  ),
};

const noAction: Story = {
  name: "default",
  render: (_args) => (
    <SummaryList>
      <SummaryListItem>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Address</SummaryListKey>
        <SummaryListValue>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryListValue>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <Typography>07700 900457</Typography>
          <Typography>sarah.phillips@example.com</Typography>
        </SummaryListValue>
      </SummaryListItem>
    </SummaryList>
  ),
};

const rowNoAction: Story = {
  name: "default",
  render: (_args) => (
    <SummaryList>
      <SummaryListItem>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Address</SummaryListKey>
        <SummaryListValue>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change
          </a>
        </SummaryListActions>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <Typography>07700 900457</Typography>
          <Typography>sarah.phillips@example.com</Typography>
        </SummaryListValue>
        <SummaryListActions>
          <a className="govuk-link" href="#">
            Change
          </a>
        </SummaryListActions>
      </SummaryListItem>
    </SummaryList>
  ),
};

const noBorders: Story = {
  name: "default",
  render: (_args) => (
    <SummaryList classes="govuk-summary-list--no-border">
      <SummaryListItem>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Address</SummaryListKey>
        <SummaryListValue>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryListValue>
      </SummaryListItem>
      <SummaryListItem>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <Typography>07700 900457</Typography>
          <Typography>sarah.phillips@example.com</Typography>
        </SummaryListValue>
      </SummaryListItem>
    </SummaryList>
  ),
};

export { primary, visuallyHidden, noAction, noBorders, rowNoAction };
