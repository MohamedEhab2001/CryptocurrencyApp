import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  News,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="main">
        <Layout>
          <section className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:conID" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </section>
        </Layout>

        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </main>
    </div>
  );
};

export default App;
