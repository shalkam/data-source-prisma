import { importSchema } from 'graphql-import';
// import typeDefs from './schema.graphql';
import path from 'path';
import context from './context';
import resolvers from './resolvers';
import mocks from './mocks';

console.log(path.resolve(__dirname, 'schema.graphql'));
const typeDefs = importSchema(path.resolve(__dirname, 'schema.graphql'));
console.log(typeDefs);
/*
 * For more information on the building GrAMPS data sources, see
 * https://gramps.js.org/data-source/data-source-overview/
 */
export default {
  // TODO: Rename the context to describe the data source.
  namespace: 'oidc',
  context,
  typeDefs,
  resolvers,
  mocks,
};
