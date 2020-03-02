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

export default GET_REPOSITORIES;
