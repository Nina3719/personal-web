import React from "react";
import { Query, Mutation } from "react-apollo";
import { getRelDataQuery, addDataMutation } from "./graphql";
import getDataQuery from "../../graphql";

const RelDataOptions = () => (
  <Query query={getRelDataQuery}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return data.relDatas.map(info => (
        <option key={info.id} value={info.id}>
          {info.name}
        </option>
      ));
    }}
  </Query>
);

const AddDataButton = ({ onSubmit }) => {
  return (
    <Mutation mutation={addDataMutation}>
      {addData => (
        <button
          onClick={e => {
            e.preventDefault();
            addData({
              variables: {
                name: onSubmit().name,
                relDataId: onSubmit().relDataId
              },
              refetchQueries: [{ query: getDataQuery }]
            });
          }}
        >
          Add Data
        </button>
      )}
    </Mutation>
  );
};

export const AddData = ({ name, relDataId, onChange, onSubmit }) => (
  <div>
    <div>Add Data</div>
    <div>
      Name: <input id="name" type="text" onChange={onChange} value={name} />
    </div>
    <div>
      RelData:
      <select id="relDataId" onChange={onChange} value={relDataId}>
        <option> Select RelData </option>
        <RelDataOptions />
      </select>
    </div>
    <AddDataButton onSubmit={onSubmit} />
  </div>
);

export default AddData;
