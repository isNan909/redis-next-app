import { createIndex } from '../../utils/newJob';

export default async function handler(_req, res) {
  await createIndex();
  res.status(200).send('Index is created');
}
