import axios from 'axios';
import GET_REPOSITORIES from '../../queries/GET_REPOSITORIES';

export default async (_, res) => {
  try {
    const response = await axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_SERVER_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
        data: {
            query: GET_REPOSITORIES,
        },
    });

    if (response.data.errors) {
      console.log(response.data.errors);
      return res.status(500).send('Server error');
    }

    const repos = response.data.data.user.repositories.nodes;
    return res.json(repos);
  } catch (e) {
    return res.status(500).send('Server error');
  }
}