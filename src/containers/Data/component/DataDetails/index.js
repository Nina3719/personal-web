import React from "react";
import { Query } from "react-apollo";
import getDataQuery from "./graphql";

const DataDetails = ({ id }) => (
  <Query query={getDataQuery} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";

      if (data) {
        const { name, rel } = data.data;

        return (
          <div>
            {name}
            {rel.name}
            {rel.rank}
            {rel.data.map(x => <div key={x.id}> {x.name}</div>)}
          </div>
        );
      }
      return <div> No Data Selected </div>;
    }}
  </Query>
);

export default DataDetails;
