import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Label, FileUpload } from "../../../components";

const meta: Meta<typeof FileUpload> = {
  title: "FileUpload",
  component: FileUpload,
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <FileUpload id="file-upload-1" name="file-upload-1">
      <Label>Upload a file</Label>
    </FileUpload>
  ),
};

const errorMessage: Story = {
  name: "default",
  render: (_args) => (
    <FileUpload
      id="file-upload-1"
      name="file-upload-1"
      errorMessage="The CSV must be smaller than 2MB"
    >
      <Label>Upload a file</Label>
    </FileUpload>
  ),
};

export { primary, errorMessage };
