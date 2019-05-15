import React from "react";
import Tree from "react-tree-graph";
import "./stategraph.css";

let graphdata = {
  name: "App",
  gProps: {
    className: "node rootnode"
  },
  children: [
    {
      name: "A",
      gProps: {
        className: "node has-state-A"
      },
      children: [
        { name: "A1", gProps: { className: "node has-state-A" } },
        { name: "A2", gProps: { className: "node has-state-A" } }
      ]
    },
    {
      name: "B",
      gProps: {
        className: "node has-state-B"
      },
      children: [
        { name: "B1" },
        { name: "B2", gProps: { className: "node has-state-B" } }
      ]
    }
  ]
};

export default class StateGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      data: graphdata
    };
  }
  elevateState() {
    graphdata.gProps.className = "node rootnode has-state-A";
    graphdata.children[1].gProps.className = "node has-state-A";
    graphdata.children[1].children[1].gProps.className = "node has-state-A";
    this.setState({ data: graphdata });
  }
  render() {
    return (
      <div>
        <Tree
          data={this.state.data}
          height={600}
          width={600}
          svgProps={{
            className: "state-graph"
          }}
        />
        <button type="button" onClick={() => this.elevateState()}>
          Elevate State
        </button>
      </div>
    );
  }
}
