import React from "react"
import "./GeneralBtn.css"

function GeneralBtn({ btnText, kindOfBtn, handleClick }) {
  return (
    <button 
      className={ kindOfBtn ? "btnLeft" : "btnRight" }
      onClick={handleClick}>
      {btnText}
    </button>
  )
}

export default GeneralBtn