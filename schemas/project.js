import { MdSentimentVeryDissatisfied as icon } from "react-icons/md";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
      description: "The name of the project",
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
      description: "High level description of the project",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      description: "Live URL",
    },
    {
      name: "video",
      title: "Video",
      type: "string",
      description: "Youtube Walkthru Video",
    },
    {
      name: "technologies",
      title: "Techonologies",
      type: "array",
      of: [
        { type: "reference", name: "technology", to: [{ type: "technology" }] },
      ],
    },
    {
      name: "relatedPost",
      title: "Related Blog Post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      technology0: "technologies.0.name",
      technology1: "technologies.1.name",
      technology2: "technologies.2.name",
      technology3: "technologies.3.name",
    },
    prepare: ({ title, media, ...technologies }) => {
      const techs = Object.values(technologies).filter(Boolean);
      return {
        title,
        media,
        subtitle: techs.join(", "),
      };
    },
  },
};
