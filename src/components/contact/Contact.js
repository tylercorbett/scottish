import React from 'react';
import './Contact.scss';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
  return (
    <section className="Contact">
      <h3>Contact</h3>
        <TextField 
          autoFocus
          label="Name"
          fullWidth={true}
          className="label"
        />
        <TextField 
          label="Address"
          fullWidth={true}
          className="label"
        />
        <TextField 
          label="Phone"
          type="tel"
          fullWidth={true}
          className="label"
        />
        <TextField 
          label="Email"
          type="email"
          fullWidth={true}
          className="label"
        />
    </section>
  );
};

export default Contact;
