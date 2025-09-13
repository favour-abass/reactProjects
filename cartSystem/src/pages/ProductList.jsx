import React from "react";
import { useCart } from "../context/CartsContext";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, description: "This is product 1" },
    { id: 2, name: "Product 2", price: 200, description: "This is product 2" },
    { id: 3, name: "Product 3", price: 300, description: "This is product 3" },
    { id: 4, name: "Product 4", price: 400, description: "This is product 4" },
    { id: 5, name: "Product 5", price: 500, description: "This is product 5" },
    { id: 6, name: "Product 6", price: 600, description: "This is product 6" },
    { id: 7, name: "Product 7", price: 700, description: "This is product 7" },
    { id: 8, name: "Product 8", price: 800, description: "This is product 8" },
    { id: 9, name: "Product 9", price: 900, description: "This is product 9" },
  ];

  const {addToCart} = useCart();

  return (
    <div className="mt-24 px-20">
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border border-blue-600 p-4 rounded">
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => addToCart(product)}
                className="rounded-4xl bg-blue-400 hover:bg-blue-500 transition-colors text-white px-4 py-2"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
