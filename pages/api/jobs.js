import { postNewJob } from '../../utils/newJob';

export default async function handler(req, res) {
  const id = await postNewJob(req.body);
  if (!id) return res.status(500).send('Error posting a job');
  res.status(200).json({ id });
}
