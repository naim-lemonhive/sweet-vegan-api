import { colors } from "./sizeAndColors";

export default {
  name: "customButton",
  title: "Custom Button",
  type: "object",
  fields: [
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    },
    {
      name: "buttonTextColor",
      title: "Text Color",
      type: "string",
      options: {
        list: [...colors],
      },
    },
    {
      name: "buttonBackgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [...colors],
      },
    },
  ],
};
