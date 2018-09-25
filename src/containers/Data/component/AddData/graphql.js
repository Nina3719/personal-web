import gql from "graphql-tag";

export const getRelDataQuery = gql`
  {
    relDatas {
      id
      name
    }
  }
`;

export const addDataMutation = gql`
  mutation($name: String!, $relDataId: ID!) {
    addData(name: $name, relDataId: $relDataId) {
      id
      name
    }
  }
`;
