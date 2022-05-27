import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Avatar
          src={"https://i.ibb.co/Z11pcGG/cryptocurrency.png"}
          size="large"
        />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key="2">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key="3">
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key="4">
          <Link to="/news">New</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navbar;
/*
          <Button className="menu-control-container">
    
          </Button>
*/
