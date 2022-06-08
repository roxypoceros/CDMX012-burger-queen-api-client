import React from "react";
import ProductsAPI from "../ProductsAPI/ProductsAPI";
import "./Order.css";

function Order() {


    
    return (
        <>
            <div className="mainContainer">
                <section className="leftSection">
                    <section className="upperLeftSection">

                        <section className="menuBtns">
                            <h1>Menu:</h1>
                            <button className="btnBreakfast">Desayuno</button>
                            <button className="btnDinner">Comida/Cena</button>
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
                    <section className="lowLeftSection"> <ProductsAPI/></section>
                </section>
                <section className="rightSection"> 
                <h1>Fecha:</h1>
                <h1>Hora:</h1>
                <h1>Cliente:__________</h1>
                <h1>Mesa:__________</h1>




                 </section>
            </div>
        </>
    );
}

export default Order;
