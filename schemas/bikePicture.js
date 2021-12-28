import { GiDutchBike as icon } from "react-icons/gi";

export default {
  name: "bikePictures",
  title: "Bike Pictures",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Location",
      type: "string",
      description: "Where was this picture taken?",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Say something about this picture",
    },
  ],
};
