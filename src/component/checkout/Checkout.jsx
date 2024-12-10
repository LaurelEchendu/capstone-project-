import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Checkout = () => {
  const { data, cartItem } = useContext(ShopContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', form);
  };

  const cartItems = data.filter((item) => cartItem[item.id] > 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * cartItem[item.id], 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-10">Checkout</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Shipping Information */}
          <div className="flex-1 bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full sm:col-span-2"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP/Postal Code"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded shadow-md flex-1">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            {cartItems.map((item) => (
              <div className="flex justify-between mb-4" key={item.id}>
                <span>{item.title} x {cartItem[item.id]}</span>
                <span>${(item.price * cartItem[item.id]).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white p-6 rounded shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={form.expiryDate}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={form.cvc}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded mt-4"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
