import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Live from "./Live";

// Route to the website, if our url = beachhacks.com, that routePath
const routePath = process.env.PUBLIC_URL;

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="s-container">
          {/* Default route (index.js) */}
          <Route exact path={routePath + "/"} component={Home} />
          <Route exact path={routePath + "/live"} component={Live} />
          <Route
            exact
            path={routePath + "/discord"}
            component={() => { window.location = "https://discordapp.com/invite/eaYvcu7"}}
          />
        </div>
      </BrowserRouter>
    );
  }
}
