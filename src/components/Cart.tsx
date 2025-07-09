import React from 'react';
import { X, Minus, Plus, ShoppingBag, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    isCartOpen, 
    setIsCartOpen,
    totalAmount
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-xl">
        {/* Cart header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-lg font-medium text-gray-700">Your cart is empty</p>
              <p className="text-gray-500 mt-2">Add some products to your cart to see them here.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.product.id} className="py-4 flex">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-md font-medium text-gray-800">{item.product.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">${item.product.price.toFixed(2)} / {item.product.unit}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-gray-600"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-gray-600 hover:text-gray-800"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2 py-1 min-w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-gray-600 hover:text-gray-800"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart footer */}
        <div className="p-4 border-t border-gray-200">
          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>

              <div className="flex text-sm text-gray-600 mb-4 items-center">
                <AlertCircle className="h-4 w-4 text-blue-500 mr-2" />
                <p>Taxes and shipping calculated at checkout</p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-sky-600 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                >
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
          {cartItems.length === 0 && (
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full bg-green-600 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              Continue Shopping
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;