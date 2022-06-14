import React from "react"
import "./CardProduct.css"


function CardProduct({ product }) {
    return (
        <div className="completeCard">{product &&
            <>
                <h2 className="upperName">{product.name}</h2>
                <img src={product.img} alt="food" className="foodImg"/>
                <h4>${product.price}.00</h4>

            </>
        }

        </div>
    )
}

export default CardProduct