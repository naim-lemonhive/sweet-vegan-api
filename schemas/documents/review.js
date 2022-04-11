import {MdStar as icon} from 'react-icons/md';

export default {
  title: "Review",
  name: "review",
  type: "document",
  icon,
  fields: [
    {
      title: "Rating",
      name: "rating",
      type: "number",
    },
    {
      title: "Review",
      name: "reviewDescription",
      type: "blockContent",
    },
    {
      title: "User Name",
      name: "userName",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "user" }],
        },
      ],
    },
    {
      title: "Product",
      name: "product",
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
    select: {
      rating: "rating",
    },
    prepare({ rating }) {
      return {
        title: "Total Rating",
        subtitle: rating,
      };
    },
  },
};