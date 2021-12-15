import { IoLogoJavascript as icon } from "react-icons/io";

export default {
  name: "technology", // computer name
  title: "Technologies", // visible ui title
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Technology", // visible ui title
      type: "string",
      description: "What technology are you using?",
    },
    {
      name: "framework",
      title: "Framework", // visible ui title
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
