import { useEffect, useState } from "react";

export default function Cart({ cartItems, removeFromCart }) {
    const [items, setItems] = useState(cartItems);

    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {items.length > 0 ? (
                <ul>
                    {items.map((item) => (
                        <li key={item.imdbID} className="flex justify-between items-center p-2 border-b">
                            <span>{item.Title} ({item.Year})</span>
                            <button
                                onClick={() => removeFromCart(item.imdbID)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in cart.</p>
            )}
        </div>
    );
}
