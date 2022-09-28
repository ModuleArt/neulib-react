// components
import Button from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Default = () => <Button>Button</Button>;

export const Primary = () => (
  <Button variant="primary" size="large">
    Button
  </Button>
);
