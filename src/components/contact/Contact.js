import React from 'react';
import './Contact.scss';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
  return (
    <section className="Contact">
      <h3>Contact</h3>
      <div className="name-address">
        <TextField 
          autoFocus
          label="Name"
        />
        <TextField 
          label="Address"
        />
      </div>
    </section>
  );
};

export default Contact;
