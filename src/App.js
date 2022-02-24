import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { layout, Typography, Space } from "antd";

import { Navbar, Layout, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/exchanges">
                        <Exchanges />
                    </Route>
                    <Route exact path="/cryptocurrencies">
                        <Cryptocurrencies />
                    </Route>
                    <Route exact path="/news">
                        <News />
                    </Route>
                </Switch>

                </div>
            </Layout>
        </div>
        <div className="footer">
            
        </div>
      </div>
    </div>
  );
};

export default App;
