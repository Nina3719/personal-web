import React, { Component } from "react";
import { Query } from "react-apollo";
import getDataQuery from "./graphql";
import AddData from "./component/AddData";
import DataDetails from "./component/DataDetails";

const MyData = ({ onSelectBook }) => (
  <Query query={getDataQuery}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          {data.datas.map(info => (
            <div key={info.id} onClick={() => onSelectBook(info.id)}>
              <div> {info.name} </div>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      relDataId: "",
      id: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSelectBook = id => {
    this.setState({
      id
    });
  };

  onSubmit = () => this.state;

  render() {
    const { name, relDataId, id } = this.state;
    return (
      <div>
        Data List
        <MyData onSelectBook={this.onSelectBook} />
        <AddData
          name={name}
          relDataId={relDataId}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <DataDetails id={id} />
      </div>
    );
  }
}

export default Data;
