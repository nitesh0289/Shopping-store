import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

import "./MenuShop.css";
import JeansItem from "./components/JeansItem";
import TShirts from "./components/TShirts";

const { Content, Sider } = Layout;

function MensShop() {
  const [selectedMenu, setSelectedMenu] = useState("1");

  const componentsSwtich = (key) => {
    switch (key) {
      case "1":
        return <JeansItem type="Mens" />;
      case "2":
        return <TShirts type="Mens" />;
      case "3":
        return <JeansItem />;
      case "4":
        return <JeansItem />;
      case "5":
        return <JeansItem />;
      case "6":
        return <JeansItem />;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        minWidth: "1200px",
        height: "100vh",
      }}
    >
      <Layout className="sider-width">
        <Sider className="sider-container">
          <div className="sidebarTitle">Mens Shopping</div>
          <Menu
            selectedKeys={selectedMenu}
            className="menu-container"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={(e) => setSelectedMenu(e.key)}
          >
            <Menu.Item
              key="1"
              icon={
                <img src="https://img.icons8.com/emoji/32/000000/jeans-emoji.png" />
              }
              className="menu-item"
            >
              Jeans
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <img src="https://img.icons8.com/bubbles/32/000000/t-shirt.png" />
              }
              className="menu-item"
            >
              T-Shirts
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <img src="https://img.icons8.com/flat-round/32/000000/short-sleeve-shirt.png" />
              }
              className="menu-item"
            >
              Shirts
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={
                <img src="https://img.icons8.com/plasticine/32/000000/trousers.png" />
              }
              className="menu-item"
            >
              Trousers
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={
                <img src="https://img.icons8.com/flat-round/32/000000/sneakers.png" />
              }
              className="menu-item"
            >
              Shoes
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                <img src="https://img.icons8.com/bubbles/32/000000/flip-flops.png" />
              }
              className="menu-item"
            >
              Slippers
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>{componentsSwtich(selectedMenu)}</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MensShop;
