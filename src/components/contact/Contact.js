import React from 'react';
import './Contact.scss';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
  return (
    <section className="Contact">
      <h3>Contact</h3>
      <div className="center">
        <TextField 
          autoFocus
          label="Name"
        />
        <TextField 
          label="Address"
        />
      </div>
      <div className="center">
        <TextField 
          label="Phone"
          type="tel"
        />
        <TextField 
          label="Email"
          type="email"
        />
      </div>
    </section>
  );
};

export default Contact;
