import React from "react";
import "./sidebar.styles.scss";

import { PeiliConsumer } from "../../context/context";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        console.log(value);
        return <Link to="/">go go</Link>;
      }}
    </PeiliConsumer>
  );
};

export default Sidebar;
