import { Client, Entity, Schema } from 'redis-om';

const client = new Client();

async function connect() {
  if(client.isOpen()) return;
  await client.open(process.env.CONNECTION_URL);
  if (!client.isOpen()) {
  }
}

class Job extends Entity {}
let schema = new Schema(
  Job,
  {
    company: { type: 'string' },
    title: { type: 'string' },
    experience: { type: 'string' },
    website: { type: 'string' },
  },
  {
    dataStructure: 'JSON',
  }
);

export async function postNewJob(data) {
  await connect();
  const repository = client.fetchRepository(schema);
  const newJob = repository.createEntity(data);
  const id = await repository.save(newJob);
  return id;
}
