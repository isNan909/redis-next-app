import { getJobs } from '../../utils/newJob';

export default async function handler(req, res) {
  const jobs = await getJobs(req.query);
  res.status(200).json({ jobs });
}
