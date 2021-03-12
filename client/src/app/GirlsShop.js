import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

import "./components/AntDesign.css";
import JeansItem from "./components/JeansItem";
import TShirts from "./components/TShirts";

const { Content, Footer, Sider } = Layout;

function GirlsShop() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1");

  const componentsSwtich = (key) => {
    switch (key) {
      case "1":
        return <JeansItem type="Girls" />;
      case "2":
        return <TShirts type="Girls" />;
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
        display: "flex",
        width: "100vw",
        height: "100vh",
        marginTop: "4.5em",
      }}
    >
      <Layout
        className={collapsed ? "containerWidth" : "onCollapseContainerWidth"}
      >
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="sidebarTitle">Girls Shopping</div>
          <Menu
            selectedKeys={selectedMenu}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="mt-5"
            onClick={(e) => setSelectedMenu(e.key)}
          >
            <Menu.Item
              key="1"
              icon={
                <img src="https://img.icons8.com/color/32/000000/jeans.png" />
              }
              className="text-warning"
            >
              Jeans
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <img src="https://img.icons8.com/plasticine/32/000000/womens-t-shirt.png" />
              }
              className="text-warning"
            >
              T-Shirts
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <img src="https://img.icons8.com/color/32/000000/wedding-dress.png" />
              }
              className="text-warning"
            >
              Gowns
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={
                <img src="https://img.icons8.com/doodle/32/000000/wedding-dress--v1.png" />
              }
              className="text-warning"
            >
              Frocks
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={
                <img src="https://img.icons8.com/cotton/32/000000/women-shoes.png" />
              }
              className="text-warning"
            >
              Scandles
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                <img src="https://img.icons8.com/plasticine/32/000000/slippers.png" />
              }
              className="text-warning"
            >
              Slippers
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className="site-layout pt-3"
          style={{ backgroundColor: "#e3e4e6" }}
        >
          <Content>{componentsSwtich(selectedMenu)}</Content>
          <Footer style={{ textAlign: "center" }}>
            a_phenomenal1 ©2021 Created by Nitesh Kumar
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default GirlsShop;
