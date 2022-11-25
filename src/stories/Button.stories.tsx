import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';
import fixtures from 'govuk-frontend/govuk/components/button/fixtures.json';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const primary: Story = { name: 'default' };
const disabled: Story = { name: 'disabled' };
const link: Story = { name: 'link' };
const linkDisabled: Story = { name: 'link disabled' };
const start: Story = { name: 'start' };
const startLink: Story = { name: 'start link' };
const input: Story = { name: 'input' };
const inputDisabled: Story = { name: 'input disabled' };
const preventDoubleClick: Story = { name: 'prevent double click' };
const withActiveState: Story = { name: 'with active state' };
const withHoverState: Story = { name: 'with hover state' };
const withFocusState: Story = { name: 'with focus state' };
const secondary: Story = { name: 'Secondary' };
const secondaryDisabled: Story = { name: 'Secondary disabled' };
const secondaryLink: Story = { name: 'Secondary link' };
const warning: Story = { name: 'Warning' };
const warningDisabled: Story = { name: 'Warning disabled' };
const warningLink: Story = { name: 'Warning link' };

const stories: Story[] = [];
stories.push(primary);
stories.push(disabled);
stories.push(link);
stories.push(linkDisabled);
stories.push(start);
stories.push(startLink);
stories.push(input);
stories.push(inputDisabled);
stories.push(preventDoubleClick);
stories.push(withActiveState);
stories.push(withHoverState);
stories.push(withFocusState);
stories.push(secondary);
stories.push(secondaryDisabled);
stories.push(secondaryLink);
stories.push(warning);
stories.push(warningDisabled);
stories.push(warningLink);

fixtures.fixtures.forEach(fixture => {
  let story: Story = stories.find(s => s.name === fixture.name) || { };
  if (story.name === fixture.name) {
    story.args = {
      children: fixture.options.text,
      href: fixture.options.href,
      isStartButton: fixture.options.isStartButton,
      disabled: fixture.options.disabled,
      preventDoubleClick: fixture.options.preventDoubleClick,
      type: fixture.options.element === 'input' ? 'input' : 'button',
      classes: fixture.options.classes,
    }
  }
});

export {
  primary,
  disabled,
  link,
  linkDisabled,
  start,
  startLink,
  input,
  inputDisabled,
  preventDoubleClick,
  withActiveState,
  withHoverState,
  withFocusState,
  secondary,
  secondaryDisabled,
  secondaryLink,
  warning,
  warningDisabled,
  warningLink,
};
