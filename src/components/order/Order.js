import React from 'react';
import './Order.scss';

const Order = () => {
  return (
    <section className="Order">
      <h3>Order</h3>
      <div className="item">
        <label>
          Item
        </label>
        <select>
          <option>Kilt</option>
          <option>Hat</option>
          <option>Shoes</option>
        </select>
      </div>
    </section>
  );
};

export default Order;
