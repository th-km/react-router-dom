import React from "react"

import Header from "./Header"

const MainLayout = ({ children, className = "" }) => {
  let classNames = ["container", className].join(" ")

  return (
    <>
      <Header />
      <div className={classNames}>{children}</div>
    </>
  )
}

export default MainLayout
