import { colors } from "../../../typography/sizeAndColors";

export default {
  name: "pageNewsletter",
  title: "Newsletter nfo",
  type: "object",
  fields: [
    {
      name: "newsletterHeading",
      title: "Newsletter Heading",
      type: "string",
    },
    {
      name: "newsLetterSectionBackground",
      title: "Newsletter Section Background Color",
      type: "string",
      options: {
        list: [...colors],
      },
    },
    {
      name: "newsletterText",
      title: "Heading Text",
      type: "customText",
    },
    {
      name: "newsletterButton",
      title: "Newsletter Button",
      type: "customButton",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Newsletter Section",
      };
    },
  },
};
