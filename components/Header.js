import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";
/*
export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item>CrowdCoin</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>

        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
*/
//Menu.Item tag and Link tag have conflicting styling so we replace Menu.Item as below:

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">BitMall</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Stores</a>
        </Link>

        <Link route="/stores/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
