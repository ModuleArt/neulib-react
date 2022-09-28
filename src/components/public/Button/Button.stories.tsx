// utils
import type { Story } from "@ladle/react";

// components
import Button from "./index";

// props
import { IButton } from "./props";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Default: Story<IButton> = (args) => (
  <>
    <h1>Button</h1>

    <Button {...args}>Button</Button>

    <h2>Code</h2>

    <code>{"<Button>Button</Button>"}</code>

    <h2>Props</h2>

    <table cellSpacing="0">
      <tbody>
        <tr>
          <th>Prop</th>
          <th>Value</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>variant</td>
          <td>"default" | "primary"</td>
          <td>"default"</td>
        </tr>
        <tr>
          <td>size</td>
          <td>"default" | "large"</td>
          <td>"default"</td>
        </tr>
      </tbody>
    </table>

    <h2>General Props</h2>

    <table cellSpacing="0">
      <tbody>
        <tr>
          <th>Prop</th>
          <th>Value</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>m</td>
          <td>IMargin</td>
          <td>undefined</td>
        </tr>
      </tbody>
    </table>

    <h2>Events</h2>

    <table cellSpacing="0">
      <tbody>
        <tr>
          <th>Event</th>
          <th>Return Value</th>
        </tr>
        <tr>
          <td>onClick</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </>
);

Default.argTypes = {
  variant: {
    options: ["default", "primary"],
    control: { type: "radio" },
    defaultValue: "default",
  },
  size: {
    options: ["default", "large"],
    control: { type: "radio" },
    defaultValue: "default",
  },
};
