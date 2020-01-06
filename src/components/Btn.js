import React from "react"
import { useHistory } from "react-router-dom"

function Btn() {
  const history = useHistory()

  return <button onClick={() => history.goBack()}>&larr;</button>
}

export default Btn
