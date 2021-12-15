import { MdSentimentVeryDissatisfied as icon } from "react-icons/md";

export default {
  name: "project", // computer name
  title: "Project", // visible ui title
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Project Name", // visible ui title
      type: "string",
      description: "The name of the project",
    },
    {
      name: "slug",
      title: "Slug", // visible ui title
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image", // visible ui title
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description", // visible ui title
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
      // kinda like adding another list of fields
      of: [{ type: "reference", to: [{ type: "technology" }] }],
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
      //filter undefined undefined techs
      const techs = Object.values(technologies).filter(Boolean);
      //return preview object
      return {
        title,
        media,
        subtitle: techs.join(", "),
      };
    },
  },
};
