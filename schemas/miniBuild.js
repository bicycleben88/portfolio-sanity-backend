import { GiEvilMinion as icon } from "react-icons/gi";

export default {
  name: "miniBuild",
  title: "MiniBuild",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Mini Build Name",
      type: "string",
      description: "The name of the build",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
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
      name: "description",
      title: "Description",
      type: "text",
      description: "What's the Build?",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      description: "Code Pen Link",
    },
    {
      name: "video",
      title: "Video",
      type: "string",
      description: "Youtube Walkthru Video",
    },
  ],
};
