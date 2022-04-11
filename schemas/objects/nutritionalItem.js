import {MdBookmarkAdded as icon} from 'react-icons/md';

export default {
  Title: "Nutritional Item",
  name: "nutritionalItem",
  type: "object",
  icon,
  fields: [
      {
          Title: "Nutrition",
          name: "nutrition",
          type: "string"
      },
      {
          Title: "Amount",
          name: "amount",
          type: "string"
      },
  ]
};