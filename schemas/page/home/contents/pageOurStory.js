export default {
  name: "pageOurStory",
  title: "Our Story",
  type: "object",
  fields: [
    {
      name: "storyHeading",
      title: "Story Heading",
      type: "string",
    },
    {
      name: "storyHeadingText",
      title: "Story Heading Text",
      type: "customText",
    },
    {
      name: "storyDescription",
      title: "Story Description",
      type: "text",
    },
    {
      name: "storyDescriptionText",
      title: "Story Description Text",
      type: "customText",
    },
    {
      name: "storyButton",
      title: "Story Button",
      type: "customButton",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Our Story Section",
      };
    },
  },
};
