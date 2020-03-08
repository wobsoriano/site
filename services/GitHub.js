import axios from 'axios';

const GET_REPOSITORIES = ` query {
  user(login: "sorxrob") {
    repositories(first: 16, isFork: false) {
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
      console.log(process.env.NEXT_SERVER_GITHUB_PERSONAL_ACCESS_TOKEN);
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
        throw new Error(response.data.errors);
      }

      return response.data.data.user.repositories.nodes;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },
};
