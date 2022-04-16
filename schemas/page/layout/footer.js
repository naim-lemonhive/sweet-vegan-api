export default {
  title: "Footer Items",
  name: "pageFooter",
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
      name: "footerShortDescription",
      title: "Short Description",
      type: "text",
    },
    {
      name: "footerItemInfo",
      title: "Footer Item Info",
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
        title: "Footer Section",
      };
    },
  },
};
