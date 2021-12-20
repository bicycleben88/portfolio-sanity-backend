import { IoLogoJavascript as icon } from "react-icons/io";

export default {
  name: "technology",
  title: "Technologies",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Technology",
      type: "string",
      description: "What technology are you using?",
    },
    {
      name: "framework",
      title: "Framework",
      type: "boolean",
      description: "Is the technology a framework?",
      options: {
        layout: "checkbox",
      },
    },
  ],
  preview: {
    select: {
      name: "name",
      framework: "framework",
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.framework ? "*F*" : ""}`,
    }),
  },
};
