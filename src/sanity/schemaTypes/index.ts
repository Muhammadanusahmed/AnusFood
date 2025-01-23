import { type SchemaTypeDefinition } from 'sanity'

import { chef } from './chef.ts'
import { food } from './food.ts'
import account from './account.ts'


export const schema: { types: SchemaTypeDefinition[]
 } = {
  types: [chef,food]
}
