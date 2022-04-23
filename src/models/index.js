// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Presenter, Event, Observer, Poll, Author, Post } = initSchema(schema);

export {
  Note,
  Presenter,
  Event,
  Observer,
  Poll,
  Author,
  Post
};