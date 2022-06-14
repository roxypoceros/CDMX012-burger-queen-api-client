import React from "react"
import "./AddRestBtn.css"

function AddRestBtn({ btnText, kindOfBtn, handleClick }) {
  return (
    <button 
      className={ kindOfBtn ? "btnAdd" : "btnRest" }
      onClick={handleClick}>
      {btnText}
    </button>
  )
}

export default AddRestBtn