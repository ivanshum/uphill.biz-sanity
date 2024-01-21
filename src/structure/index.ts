import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
      S.list()
        .title("Content")
        .items([
          // Our singleton type has a list item with a custom child
          S.listItem()
            .title("Settings")
            .id("settings")
            .child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("settings")
                .documentId("settings")
            )
        ,...S.documentTypeListItems().filter(listitem=>!['settings'].includes(listitem.getId() as string))])
  