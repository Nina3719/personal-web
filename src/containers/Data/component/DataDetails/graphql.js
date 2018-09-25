import gql from "graphql-tag";

const getDataQuery = gql`
  query($id: ID!) {
    data(id: $id) {
      id
      name
      rel {
        id
        name
        rank
        data {
          id
          name
        }
      }
    }
  }
`;

export default getDataQuery;
