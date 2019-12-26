import React from 'react';
import './Order.scss';
import TextField from '@material-ui/core/TextField';

const Order = () => {
  return (
    <section className="Order">
      <h3>Order</h3>
      <section className="options">
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
        <TextField 
          label="Quantity"
          type="number"
        />
      </section>
    </section>
  );
};

export default Order;
