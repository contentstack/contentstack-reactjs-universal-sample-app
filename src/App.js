/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./page/index.jsx"
import BlogPost from "./page/blog-post.jsx"
import Error from "./page/error.jsx"
import "./static/css/main.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(renderProps) => <Home {...renderProps} />}
        />
        <Route
          exact
          path="/blogs/:uid/"
          render={(renderProps) => <BlogPost {...renderProps} />}
        />
        <Route path="*" render={(renderProps) => <Error {...renderProps} />} />
      </Switch>
    </div>
  )
}

export default App
