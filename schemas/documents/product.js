import {MdOutlineStorefront as icon} from 'react-icons/md';
import { colors } from '../typography/sizeAndColors';

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
      name: "productColor",
      Title: "Select a color",
      type: "string",
      options: {
        list: [
          ...colors
        ]
      }
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
      type: "text",
    },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "text",
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