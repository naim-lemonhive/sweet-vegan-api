import {MdHome as icon} from 'react-icons/md'

export default {
  title: "Home Page",
  name: "homePage",
  type: "document",
  icon,
  groups: [
    {
      title: "Base Info",
      name: "baseInfo",
    },
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
      {
      name: "pageMetadata",
      title: "Page Metadata",
      description:
        "Add some metadata about this page",
      type: "metadata",
      group: "seo",
    },
    {
      name: "name",
      title: "Page Name",
      description: "Add a page name here. such as about, contact",
      type: "string",
      placeholder: "Page Name",
      group: "baseInfo",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "For generating links, is not necessary if this is the landing page",
      options: {
        source: "name",
        maxLength: 96,
      },
      group: "baseInfo",
    },
    {
      name: "displayName",
      title: "Display Name",
      description:
        "Add the display name of the Page. Will be necessary for SEO/link preview.",
      type: "string",
      placeholder: "Display name",
      group: "baseInfo",
    },
    {
      name: "pageContent",
      title: "Page Content",
      description:
        "Set up the page structure and content here. You don't need to add header or footer, it should automatically added to all pages (Edit on frontend project if you want custom implementation).",
      type: "pageContents",
      group: "content",
    },
  ],
};