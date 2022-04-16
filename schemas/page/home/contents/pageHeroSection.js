import { colors } from "../../../typography/sizeAndColors";

export default {
  name: "pageHeroSection",
  title: "Page Hero Section",
  type: "object",
  fields: [
    {
      name: "heroTitle",
      title: "Hero Heading Text",
      type: "string",
    },
    {
      name: "heroSectionBackground",
      title: "Hero Background Color",
      type: "string",
      options: {
        list: [...colors],
      },
    },
    {
      name: "headingText",
      title: "Hero Heading Text",
      type: "customText",
    },

    {
      name: "heroShortDescription",
      title: "Short Description",
      type: "text",
    },
    {
      name: "heroDescriptionTextSize",
      title: "Hero Description Text",
      type: "customText",
    },
    {
      name: "heroButtonText",
      title: "Hero Button",
      type: "customButton",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Hero Section",
      };
    },
  },
};