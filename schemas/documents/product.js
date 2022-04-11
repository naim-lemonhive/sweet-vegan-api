import {MdOutlineStorefront as icon} from 'react-icons/md';

export default {
  title: "Product",
  name: "product",
  type: "document",
  icon,
  fields: [
    {
      title: "Product Name",
      name: "productName",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 96,
      },
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "Old Price",
      name: "oldPrice",
      type: "number",
    },
    {
      title: "Description",
      name: "description",
      type: "blockContent",
    },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "blockContent",
    },
    {
      title: "Nutritional Infromation",
      name: "nutritionalInfo",
      type: "array",
      of: [
        {
          Title: "Nutrition Info",
          type: "nutritionalItem",
        },
      ],
    },
  ],
  preview: {
    select: {
      productName: "productName",
      price: "price",
    },
    prepare({ productName, price }) {
      return {
        title: productName,
        subtitle: price
      };
    },
  },
};