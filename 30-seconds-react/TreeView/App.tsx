import React from "react";
import TreeView from "./TreeView";

let data = {
  lorem: {
    ipsum: "dolor sit",
    amet: {
      consectetur: "adipiscing",
      elit: [
        "duis",
        "vitae",
        {
          semper: "orci"
        },
        {
          est: "sed ornare"
        },
        "etiam",
        ["laoreet", "tincidunt"],
        ["vestibulum", "ante"]
      ]
    },
    ipsum1: "primis"
  }
};

const App = () => {
  return <TreeView data={data} name="data" />;
};

export default App;
