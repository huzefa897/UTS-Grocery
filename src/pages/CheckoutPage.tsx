import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface DeliveryDetails {
  name: string;
  street: string;
  city: string;
  state: string;
  mobile: string;
  email: string;
}

const CheckoutPage: React.FC = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();

  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    name: '',
    street: '',
    city: '',
    state: '',
    mobile: '',
    email: '',
  });

  const [errors, setErrors] = useState<Partial<DeliveryDetails>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0 && !orderPlaced) {
      navigate('/');
    }
  }, [cartItems, navigate, orderPlaced]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDeliveryDetails(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof DeliveryDetails]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<DeliveryDetails> = {};

    if (!deliveryDetails.name.trim()) newErrors.name = 'Name is required';
    if (!deliveryDetails.street.trim()) newErrors.street = 'Street is required';
    if (!deliveryDetails.city.trim()) newErrors.city = 'City/Suburb is required';
    if (!deliveryDetails.state.trim()) newErrors.state = 'State is required';

    const mobileRegex = /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/;
    if (!deliveryDetails.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(deliveryDetails.mobile)) {
      newErrors.mobile = 'Please enter a valid Australian mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!deliveryDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(deliveryDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check real-time stock availability
    const unavailableItems = cartItems.filter(item => !item.product.inStock);

    if (unavailableItems.length > 0) {
      alert('Some items are no longer available. Please update your cart.');
      navigate('/cart');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate placing order
      await new Promise(resolve => setTimeout(resolve, 1500));

      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error placing order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-green-100 p-4 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your order. A confirmation email has been sent to {deliveryDetails.email}.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center text-green-700 mb-6 hover:text-green-800"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Shopping
      </button>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
        <div className="divide-y divide-gray-200">
          {cartItems.map(item => (
            <div key={item.product.id} className="py-3 flex justify-between">
              <div className="flex items-center">
                <span className="font-medium text-gray-700">{item.quantity} ×</span>
                <span className="ml-2 text-gray-800">{item.product.name}</span>
              </div>
              <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="pt-4 flex justify-between font-medium text-lg">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-lg font-medium text-gray-900">Delivery Details</h2>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
          <input
            type="text"
            name="name"
            value={deliveryDetails.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Street */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Address*</label>
          <input
            type="text"
            name="street"
            value={deliveryDetails.street}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.street ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.street && <p className="text-red-600 text-sm mt-1">{errors.street}</p>}
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City/Suburb*</label>
          <input
            type="text"
            name="city"
            value={deliveryDetails.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
          <select
            name="state"
            value={deliveryDetails.state}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            <option value="">Select a state</option>
            <option value="NSW">NSW</option>
            <option value="VIC">VIC</option>
            <option value="QLD">QLD</option>
            <option value="WA">WA</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="ACT">ACT</option>
            <option value="NT">NT</option>
            <option value="Others">Others</option>
          </select>
          {errors.state && <p className="text-red-600 text-sm mt-1">{errors.state}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
          <input
            type="tel"
            name="mobile"
            placeholder="e.g., 0412 345 678"
            value={deliveryDetails.mobile}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
          <input
            type="email"
            name="email"
            value={deliveryDetails.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting || cartItems.length === 0}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              isSubmitting || cartItems.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            } transition-colors`}
          >
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
