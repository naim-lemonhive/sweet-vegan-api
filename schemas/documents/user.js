import {MdPerson as icon} from 'react-icons/md';

export default {
  name: "user",
  title: "User",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "occupation",
      title: "Occupation",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title,
        media: image,
      };
    },
  },
};
