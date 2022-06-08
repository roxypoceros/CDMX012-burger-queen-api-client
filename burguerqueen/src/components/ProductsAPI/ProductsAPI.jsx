import React, { useEffect, useState } from "react"
import CardProduct from "../CardProduct/CardProduct"

function ProductsAPI() {
  let [products, setProducts] = useState()

  let getData = async () => {
    let url = `http://localhost:4000/products`
    let getFetchData = await fetch(url).then(result => result.json())
    console.log(getFetchData)
    setProducts(getFetchData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {products && products.map(product =>
        <CardProduct product={product} key={product.id} />

      )}
    </>
  )
}

export default ProductsAPI;