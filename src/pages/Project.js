import React from "react"
import { Link } from "react-router-dom"

import MainLayout from "../components/MainLayout"
import data from "../data"

const projects = data.map(project => (
  <div
    key={project.id}
    style={{
      backgroundImage: `url(${project.thumb})`
    }}
    className="project"
  >
    <Link to={`project/${project.id}`}>{project.name}</Link>
  </div>
))

function Contact() {
  return (
    <MainLayout>
      <div className="projects">{projects}</div>
    </MainLayout>
  )
}

export default Contact
