export default {
  name: "pageProductFlavour",
  title: "Product Flavour",
  type: "object",
  fields: [
      {
          name: "productFlavourHeading",
          title: "Product Flavour Heading",
          type: "string"
      },
      {
          name: "productFlavourHeadingText",
          title: "Product Flavour Heading Text",
          type: "customText"
      },
      {
          name: "productFlavourDescription",
          title: "Product Flavour Description",
          type: "text"
      },
      {
          name: "productFlavourDescriptionText",
          title: "Product Flavour Description Text",
          type: "customText"
      },
    {
      name: "productFlavour",
      title: " Select Products",
      description: "Select some products for product flavour section",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Product Flavour Section",
      };
    },
  },
};
