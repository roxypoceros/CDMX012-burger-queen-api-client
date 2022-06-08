import React from "react"
import "./CardProduct.css"


function CardProduct({ product }) {
    return (
        <div className="completeCard">{product &&
            <section >
                <h2 className="upperName">{product.name}</h2>
                <img
                    className="foodSample"
                    src="https://i.imgur.com/iZG5sQC.jpg"
                    alt="sample"
                ></img>
                <h1>${product.price}.00</h1>

            </section>
        }

        </div>
    )
}

export default CardProduct