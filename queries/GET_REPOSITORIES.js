const GET_REPOSITORIES = ` query {
    user(login: "sorxrob") {
      repositories(first: 20, isFork: false) {
        nodes {
          name
          url
          forkCount
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export default GET_REPOSITORIES;
