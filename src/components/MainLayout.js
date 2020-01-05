import React from "react"

import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({ children, className = "" }) => {
  let classNames = ["container", className].join(" ")

  return (
    <>
      <Header />
      <div className={classNames}>{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
