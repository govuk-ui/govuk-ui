import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  SummaryList,
  SummaryListActions,
  SummaryListItem,
  SummaryListKey,
  SummaryListValue,
  SummaryListCard,
  SummaryListCardAction,
  Typography,
} from "../../..";

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
  name: "visually hidden text",
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
  name: "no actions",
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
  name: "row no actions",
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
  name: "no borders",
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

const summaryCards: Story = {
  name: "summary cards",
  render: (_args) => (
    <>
      <SummaryListCard title="Person 1">
        <SummaryList>
          <SummaryListItem>
            <SummaryListKey>Age</SummaryListKey>
            <SummaryListValue>38</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Nationality</SummaryListKey>
            <SummaryListValue>UK national resident in UK</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Working situation</SummaryListKey>
            <SummaryListValue>Part time – less than 30 hours a week</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
        </SummaryList>
      </SummaryListCard>
      <SummaryListCard title="Person 2">
        <SummaryList>
          <SummaryListItem>
            <SummaryListKey>Details known</SummaryListKey>
            <SummaryListValue>Yes</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Relationship to lead tenant</SummaryListKey>
            <SummaryListValue>Partner</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Age</SummaryListKey>
            <SummaryListValue>42</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Working situation</SummaryListKey>
            <SummaryListValue>
              Unable to work because of long-term sickness or disability
            </SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
        </SummaryList>
      </SummaryListCard>
      <SummaryListCard title="Person 3">
        <SummaryList>
          <SummaryListItem>
            <SummaryListKey>Details known</SummaryListKey>
            <SummaryListValue>Yes</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Relationship to lead tenant</SummaryListKey>
            <SummaryListValue>Child</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Age</SummaryListKey>
            <SummaryListValue>7</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Working situation</SummaryListKey>
            <SummaryListValue>Child under 16</SummaryListValue>
            <SummaryListActions>
              <a className="govuk-link" href="#">
                Change
              </a>
            </SummaryListActions>
          </SummaryListItem>
        </SummaryList>
      </SummaryListCard>
    </>
  ),
};

const summaryCardsWithActions: Story = {
  name: "summary cards with actions",
  render: (_args) => (
    <>
      <SummaryListCard title="University of Gloucestershire">
        <SummaryListCardAction>
          <a className="govuk-link" href="#">
            Delete choice
          </a>
        </SummaryListCardAction>
        <SummaryListCardAction>
          <a className="govuk-link" href="#">
            Withdraw
          </a>
        </SummaryListCardAction>
        <SummaryList>
          <SummaryListItem>
            <SummaryListKey>Course</SummaryListKey>
            <SummaryListValue>
              English (3DMD)
              <br />
              PGCE with QTS full time
            </SummaryListValue>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Location</SummaryListKey>
            <SummaryListValue>
              School name
              <br />
              Road, City, SW1 1AA
            </SummaryListValue>
          </SummaryListItem>
        </SummaryList>
      </SummaryListCard>
      <SummaryListCard title="University of Bristol">
        <SummaryListCardAction>
          <a className="govuk-link" href="#">
            Delete choice
          </a>
        </SummaryListCardAction>
        <SummaryListCardAction>
          <a className="govuk-link" href="#">
            Withdraw
          </a>
        </SummaryListCardAction>
        <SummaryList>
          <SummaryListItem>
            <SummaryListKey>Course</SummaryListKey>
            <SummaryListValue>
              English (Q3X1)
              <br />
              PGCE with QTS full time
            </SummaryListValue>
          </SummaryListItem>
          <SummaryListItem>
            <SummaryListKey>Location</SummaryListKey>
            <SummaryListValue>
              School name
              <br />
              Road, City, SW2 1AA
            </SummaryListValue>
          </SummaryListItem>
        </SummaryList>
      </SummaryListCard>
    </>
  ),
};

export {
  primary,
  visuallyHidden,
  noAction,
  noBorders,
  rowNoAction,
  summaryCards,
  summaryCardsWithActions,
};
