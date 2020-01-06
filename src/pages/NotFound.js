import React from "react"
import MainLayout from "../components/MainLayout"
import Btn from "../components/Btn"

function NotFound() {
  return (
    <MainLayout className="not-found">
      <Btn />
      <h1>Page not found</h1>
    </MainLayout>
  )
}

export default NotFound
