import React, { FC, SFC, CSSProperties } from "react";

import "./index.less";

const ToolTip: SFC<{
  text: string;
  style?: CSSProperties;
}> = ({ children, text, style, ...rest }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div style={style}>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default ToolTip;
