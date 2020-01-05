import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./containers/Home"
import Contact from "./containers/Contact"
import About from "./containers/About"
import User from "./containers/User"
import NotFound from "./containers/NotFound"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/user/:userId">
        <User />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default App
