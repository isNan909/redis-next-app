import { Client } from 'redis-om';

const client = new Client();

export default async function connectDatabase() {
  if (!client.isOpen()) {
    await client.open(process.env.CONNECTION_URL);
  }
}

export function disconnectDatabase() {
  client.close();
}
