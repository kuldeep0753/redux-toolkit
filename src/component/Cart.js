import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((i) => i.cart.items);
  console.log(cartItems);

  //dispatch an action
  const dispatch = useDispatch();

  //handle items
  const handleAddItem = () => {
    dispatch(addItem("check")); //action:{payload:"check"}
  };

  //remove items
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <React.Fragment>
      <h3>Cart: {cartItems.length} Items</h3>
      <div>
        <button
          type="button"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={() => {
            handleAddItem();
          }}
        >
          Add Item
        </button>
      </div>
      <div>
        <button
          type="button"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          onClick={() => {
            handleRemoveItem();
          }}
        >
          Remove Item
        </button>
      </div>
      <div>
        <button
          type="button"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={() => {
            handleRemoveItem();
          }}
        >
          Remove Item
        </button>
      </div>
    </React.Fragment>
  );
};
export default Cart;
