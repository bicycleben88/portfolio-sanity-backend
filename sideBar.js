import React from "react";
import { FaSkull as icon } from "react-icons/fa";
import S from "@sanity/desk-tool/structure-builder";

export default function SideBar() {
  return S.list()
    .title(`Ben's Portfolio`)
    .items([
      S.listItem()
        .title(`Home Page`)
        .icon(icon)
        .child(
          S.editor().schemaType("pageSettings").documentId(`BensPortfolio`)
        ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "pageSettings"
      ),
    ]);
}
