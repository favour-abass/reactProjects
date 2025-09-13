import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartsContext";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cart, totalItems, removeFromCart, clearCart } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div className="mt-20 mx-20">
      {visible && (
        <h2 className="flex items-center justify-center font-bold text-blue-400 text-4xl mb-5">
          Cart <FaShoppingCart className="ms-2" />
        </h2>
      )}
      {!visible && (
        <h2 className="flex items-center justify-center font-bold text-blue-400 text-4xl mt-60">
          Cart <FaShoppingCart className="ms-2" />
        </h2>
      )}
      {cart.length === 0 ? (
        <p className="flex justify-center items-center mt-5">
          No items in cart.
        </p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <ul className="divide-y divide-gray-200 border border-gray-300 rounded-md">
              <li className="flex items-center justify-between p-4 hover:bg-gray-50">
                {/* Item details */}
                <div>
                  <p className="text-gray-800 font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm"
                >
                  -
                </button>
              </li>
            </ul>
          </div>
        ))
      )}
      {visible && (
        <div className="flex justify-center mt-6">
          <button
            onClick={clearCart}
            className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-4xl"
          >
            Clear Cart
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Cart;
