import postNewJob from '../../utils/postjob';

export default async function handler(req, res) {
  const id = await postNewJob(req.body);
  res.status(200).json({ id });
}
