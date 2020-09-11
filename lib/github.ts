import axios from 'axios';

const GET_REPOSITORIES = ` query {
  user(login: "sorxrob") {
    repositories(first: 6, isFork: false, orderBy: { field: STARGAZERS, direction: DESC }) {
      nodes {
        name
        description
        url
        homepageUrl
        forkCount
        stargazers {
          totalCount
        }
        primaryLanguage {
          name
        }
        diskUsage
      }
    }
  }
}
`;

module.exports = {
  async getRepositories() {
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
        throw new Error(response.data.errors);
      }

      return response.data.data.user.repositories.nodes;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },
};
