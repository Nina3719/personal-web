import gql from "graphql-tag";

const getDataQuery = gql`
  {
    datas {
      id
      name
    }
  }
`;

export default getDataQuery;
