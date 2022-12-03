// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Comment } = initSchema(schema);

export {
  User,
  Comment
};