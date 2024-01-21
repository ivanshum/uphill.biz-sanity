import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
      S.list()
        .title("Content")
        .items([
          S.listItem()
            .title("Settings")
            .id("settings")
            .child(
              S.document()
                .schemaType("settings")
                .documentId("settings")
            )
        ,...S.documentTypeListItems().filter(listitem=>!['settings'].includes(listitem.getId() as string))])
  