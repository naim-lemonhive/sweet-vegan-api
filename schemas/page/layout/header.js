export default {
  title: "Nav Items / Page Name",
  name: "pageHeaderSection",
  type: "object",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "navItemInfo",
      title: "Nav Item Info",
      description: "Add a page title or Nav Item here.",
      type: "array",
      of: [
        {
          type: "navItems",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Header/Nav Section",
      };
    },
  },
};
