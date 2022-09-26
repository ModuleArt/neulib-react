import "../src/assets/styles/global.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "Dark",
    values: [
      {
        name: "Dark",
        value: "#1c1c1c",
      },
      {
        name: "Light",
        value: "#ffffff",
      },
    ],
  },
};
