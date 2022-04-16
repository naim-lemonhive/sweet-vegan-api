export default {
  name: "pageProductSpeciality",
  title: "Product Speciality",
  type: "object",
  fields: [
    {
      name: "productSpecialityHeading",
      title: "Product Speciality Heading",
      type: "string",
    },
    {
      name: "productSpecialityHeadingText",
      title: "Product Speciality Heading Text",
      type: "customText",
    },
    {
      name: "productSpecialityDescription",
      title: "Product Speciality Description",
      type: "text",
    },
    {
      name: "productSpecialityDescriptionText",
      title: "Product Speciality Description Text",
      type: "customText",
    },
    {
      name: "selectProductforSpeciality",
      title: "Select a product",
      description:
        "select a product to show the products ingredients and nutritional information",
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
        title: "Product Speciality Section",
      };
    },
  },
};
