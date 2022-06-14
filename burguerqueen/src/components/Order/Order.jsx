import React, { useState } from "react";
import ProductsAPI from "../ProductsAPI/ProductsAPI";
import "./Order.css";
import GeneralBtn from "../GeneralBtn/GeneralBtn";
import ItemsOrdered from "../ItemsOrdered/ItemsOrdered";
import DateAndHour from "../DateAndHour/DateAndHour";

function Order() {
    const [products, setProducts] = useState()

    const showBreakfast = () => {
        const breakfastProducts = products.filter(product => product.type==="breakfast");
        setProducts(breakfastProducts)
    }

    const showDinner = () => {
        const dinnerProducts = products.filter(product => product.type==="dinner");
        setProducts(dinnerProducts)
    }
    // console.log(`productos dinner products);


    return (
        <>
            <div className="mainContainer">
                <section className="leftSection">
                    <section className="upperLeftSection">

                        <section className="menuBtns">
                            <h1>Menu:</h1>
                            <GeneralBtn
                                btnText="Desayuno"
                                kindOfBtn={true}
                                handleClick={showBreakfast}
                            />
                            <GeneralBtn
                                btnText="Comida/Cena"
                                kindOfBtn={false}
                                handleClick={showDinner}
                            />

                        </section>

                        <section className="clientTable">
                            <h1>Cliente:</h1>
                            <input className="clientName"
                                type="text"
                                placeholder="Nombre"
                            ></input>
                            <h1>Mesa:</h1>
                            <input className="tableNum"
                                type="text"
                                placeholder="#"
                            ></input>



                        </section>



                    </section>
                    <section className="lowLeftSection"> 
                        <ProductsAPI products={products} setProducts={setProducts}/>
                    </section>
                </section>
                <section className="rightSection">
                    <h1><DateAndHour/> </h1>
                    <h1>Hora:</h1>
                    <h1>Cliente:__________</h1>
                    <h1>Mesa:__________</h1>

                    <ItemsOrdered />


                </section>
            </div>
        </>
    );
}

export default Order;
