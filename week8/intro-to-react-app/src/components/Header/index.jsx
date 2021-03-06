import React from "react";

import "./styles.css";

const Header = props => {
  const classNames = `Header ${props.kind}`
  return (
    <header className="Header">
      <h1>{props.children}</h1>
    </header>
  )
};

export default Header;
