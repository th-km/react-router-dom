import React from "react"
import { useParams } from "react-router-dom"

import MainLayout from "../components/MainLayout"
import Btn from "../components/Btn"
import data from "../data"

function ProductDetail() {
  const { projectId } = useParams()
  const selected = data.find(project => project.id === projectId)

  return (
    <MainLayout className="align-top">
      <div className="project-detail">
        <Btn />
        <h2>{selected.name}</h2>
        <img src={selected.img} alt={selected.name} />
      </div>
    </MainLayout>
  )
}

export default ProductDetail
