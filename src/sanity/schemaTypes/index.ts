import { type SchemaTypeDefinition } from 'sanity'
import { projectSchema } from './project' // Import your new schema file

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema], // Register it here
}