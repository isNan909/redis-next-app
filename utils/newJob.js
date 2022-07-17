import { Client, Entity, Schema } from 'redis-om';

const client = new Client();

async function connect() {
  if (client.isOpen()) return;
  await client.open(process.env.CONNECTION_URL);
  if (!client.isOpen()) {
  }
}

async function disconnect() {
  await client.close();
}

class Job extends Entity {}
let jobSchema = new Schema(
  Job,
  {
    company: { type: 'string' },
    experience: { type: 'string' },
    website: { type: 'string' },
    title: { type: 'text', textSearch: true },
  },
  {
    dataStructure: 'JSON',
  }
);

export async function postNewJob(data) {
  await connect();
  const repository = client.fetchRepository(jobSchema);
  const newJob = repository.createEntity(data);
  const id = await repository.save(newJob);
  await disconnect();
  return id;
}

export async function createIndex() {
  await connect();
  const repository = client.fetchRepository(jobSchema);
  await repository.createIndex();
}

//Fulltext search on the job title
export async function getJobs(query) {
  await connect();
  const repository = client.fetchRepository(jobSchema);
  return await repository
    .search()
    .where('title').matches(query)
    .return.all();
}
