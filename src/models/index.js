// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, BlogPost } = initSchema(schema);

export {
  User,
  BlogPost
};