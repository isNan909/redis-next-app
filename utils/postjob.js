import { Entity, Schema } from 'redis-om';
import { connectDatabase, disconnectDatabase } from '../lib/connectdb';

class Jobs extends Entity {}
let schema = new Schema(
  Jobs,
  {
    company: { type: 'string' },
    title: { type: 'string' },
    experience: { type: 'number' },
    website: { type: 'string' },
  },
  {
    dataStructure: 'JSON',
  }
);

export async function postNewJob(data) {
  try {
    await connectDatabase();
    const repository = client.fetchRepository(schema);
    repository.createAndSave(data);
    disconnectDatabase();
    return id;
  } catch (error) {
    console.log(error);
    return error;
  }
}
