import { colors, sizes } from "./sizeAndColors";

export default {
  name: "customText",
  title: "Custom Text",
  type: "object",
  fields: [
    {
      name: "textColor",
      title: "Text Color",
      type: "string",
      options: {
        list: [...colors],
      },
    },
    {
      name: "textSize",
      title: "Text Size",
      type: "string",
      options: {
        list: [...sizes],
      },
    },
  ],
};