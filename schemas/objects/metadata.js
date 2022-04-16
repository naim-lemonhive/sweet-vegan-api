export default {
  name: "metadata",
  title: "Metadata",
  description:
    "Some basic SEO Stuffs should be handled by default in the frontend, other meta information should be added here",
  type: "object",
  fields: [
    {
      name: "metaTag",
      title: "Meta Tag Name",
      description: '<meta name="YOUR_PROVIDED_VALUE"  ... />',
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "metaContent",
      title: "Tag Content",
      description: '<meta ... content="YOUR_PROVIDED_VALUE" />',
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      metaName: "metaName",
      metaContent: "metaContent",
      linkTag: "linkTag",
    },
  },
};
