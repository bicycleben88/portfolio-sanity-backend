import { BiHomeCircle as icon } from "react-icons/bi";

export default {
  name: "pageSettings",
  title: "Settings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Portfolio Name",
      type: "string",
      description: "Name the Portfolio",
    },
    {
      name: "project",
      title: "Project",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    },
    {
      name: "bikePictures",
      title: "Bike Pictures",
      type: "array",
      of: [{ type: "reference", to: [{ type: "bikePictures" }] }],
    },
    {
      name: "miniBuild",
      title: "Mini Build",
      type: "array",
      of: [{ type: "reference", to: [{ type: "miniBuild" }] }],
    },
  ],
};
