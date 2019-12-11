import React from "react";
import { Logo } from "./logo";
import { User } from "./user";
import Navaigation from "./navaigation";

import "./header.scss";

export const Header = ({ leftRender, rightRender }) => {
  const renderLeftArea = () => {
    return (
      <React.Fragment>
        <Logo />
        <Navaigation />
      </React.Fragment>
    );
  };

  const renderRightArea = () => {
    return (
      <React.Fragment>
        <User />
      </React.Fragment>
    );
  };

  return (
    <div className="header">
      <div className="left-area">
        {leftRender ? leftRender : renderLeftArea()}
      </div>
      <div className="right-area">
        {rightRender ? rightRender : renderRightArea()}
      </div>
    </div>
  );
};
