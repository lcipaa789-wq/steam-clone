import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <section className="min-h-screen bg-[#242424] text-white pt-28 px-10 ml-20">
        <Link to="/" className="text-lime-400 font-bold">
          ← Back to games
        </Link>
        <h1 className="text-5xl font-black mt-6 mb-10">Your cart</h1>
        {cartItems.length === 0 ? (
          <h2 className="text-2xl text-zinc-400">Your cart is empty</h2>
        ) : (
          <div className="grid gap-5">
            {cartItems.map((game) => (
              <div
                key={game.id}
                className="bg-[#2a2a2a] roudned-2xl 
                    p-4 flex items-center justify-between 
                    "
              >
                <div className="flex items-center gap-5 ">
                  <img
                    src={game.background_image}
                    alt={game.name}
                    className="w-40 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{game.name}</h2>
                    <p className="text-zinc-400">Rating: {game.rating}</p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(game.id))}
                  className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold hover:scale-105 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
