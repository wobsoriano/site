import { getRepositories } from '../../services/GitHub';

export default async (_, res) => {
  try {
    const data = await getRepositories();
    return res.json(data);
  } catch (e) {
    return res.status(500).send(e);
  }
};
