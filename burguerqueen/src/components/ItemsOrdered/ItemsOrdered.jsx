import React from "react";
import "./ItemsOrdered.css";
import { TbPlus, TbMinus } from "react-icons/tb";
import AddRestBtn from "../AddRestBtn/AddRestBtn";
import { useState } from "react";

function ItemsOrdered() {
  const [numItems, setNumItems] = useState(0);

  const addItem = () => {
    setNumItems(numItems + 1);
  };

  const restItem = () => {
    if (numItems > 0) {
      setNumItems((numItems) => numItems - 1);
    }
  };

  return (
    <>
      <div className="itemCounter">
        <AddRestBtn btnText=<TbPlus /> kindOfBtn={true} handleClick={addItem} />
        <section className="counter">
          <h3>{numItems}</h3>
        </section>
        <AddRestBtn
          btnText=<TbMinus />
          kindOfBtn={false}
          handleClick={restItem}
        />
      </div>
    </>
  );
}

export default ItemsOrdered;
