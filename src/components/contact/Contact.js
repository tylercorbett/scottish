import React from 'react';
import './Contact.scss';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';


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
          label="Phonetets"
          type="tel"
        />
        <Input
          type="email"
          label="Email"
        />
      </div>
    </section>
  );
};

export default Contact;
