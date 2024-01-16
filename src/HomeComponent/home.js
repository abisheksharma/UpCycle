import React from "react";
import Header from "../HeaderComponent/header.js";
import Footer from "../FooterComponent/footer.js";
import "./home.css";

const Home = () => {
  return (
    <body>
      <Header className="header" />
      <hr />
      <main>
        <div className="content">
          <h1>Welcome to Our Business</h1>
          <p>We provide top quality services.</p>
        </div>
      </main>
      <hr />
      <Footer className="footer" />
    </body>
  );
};

export default Home;
