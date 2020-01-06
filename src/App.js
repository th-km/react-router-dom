import React from "react"
import { Route, Switch } from "react-router-dom"

import Contact from "./pages/Contact"
import About from "./pages/About"
import Project from "./pages/Project"
import NotFound from "./pages/NotFound"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Project />
      </Route>
      <Route path="/project/:projectId">
        <ProjectDetail />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default App
