import React, { useState } from "react";

import "./treeView.css";

interface IProps {
  data: any;
  toggled?: boolean;
  name?: string | null;
  isLast?: boolean;
  isChildElement?: boolean;
  isParentToggled?: boolean;
}

const TreeView: React.FC<IProps> = ({
  data,
  toggled = true,
  name = null,
  isLast = true,
  isChildElement = false,
  isParentToggled = true
}) => {
  const [isToggled, setIsToggled] = React.useState(toggled);

  return (
    <div
      style={{ marginLeft: isChildElement ? 16 : 4 + "px" }}
      className={isParentToggled ? "tree-element" : "tree-element collapsed"}
    >
      <span
        className={isToggled ? "toggler" : "toggler closed"}
        onClick={() => setIsToggled(!isToggled)}
      />
      {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
      {Array.isArray(data) ? "[" : "{"}
      {!isToggled && "..."}
      {Object.keys(data).map((v, i, a) =>
        typeof data[v] == "object" ? (
          <TreeView
            data={data[v]}
            isLast={i === a.length - 1}
            name={Array.isArray(data) ? null : v}
            isChildElement
            isParentToggled={isParentToggled && isToggled}
          />
        ) : (
          <p
            style={{ marginLeft: 16 + "px" }}
            className={isToggled ? "tree-element" : "tree-element collapsed"}
          >
            {Array.isArray(data) ? "" : <strong>{v}: </strong>}
            {data[v]}
            {i === a.length - 1 ? "" : ","}
          </p>
        )
      )}
      {Array.isArray(data) ? "]" : "}"}
      {!isLast ? "," : ""}
    </div>
  );
};

export default TreeView;
