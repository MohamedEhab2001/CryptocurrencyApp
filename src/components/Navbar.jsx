import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const menuItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: "4",
    icon: <BulbOutlined />,
    label: <Link to="/news">New</Link>,
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
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
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <Menu theme="dark" items={menuItems} />}
    </nav>
  );
};

export default Navbar;
/*
          <Button className="menu-control-container">
    
          </Button>
*/
