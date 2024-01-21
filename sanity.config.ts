import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import { structure } from './src/structure'
const devOnlyPlugins: never[] = []
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["settings"])
export default defineConfig({
  name: 'default',
  title: 'uphill.biz',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,

  plugins: [structureTool({
    structure: (S) =>    structure(S)    }), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
        // Filter out singleton types from the global “New document” menu options
        templates: (templates) =>
        templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})

