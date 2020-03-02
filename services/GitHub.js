import axios from 'axios';

const GET_REPOSITORIES = ` query {
  user(login: "sorxrob") {
    repositories(first: 20, isFork: false) {
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
        createdAt
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
        throw new Error('Server error');
      }
      
      return response.data.data.user.repositories.nodes;
    } catch (e) {
      throw new Error('Server error');
    }
  }
}