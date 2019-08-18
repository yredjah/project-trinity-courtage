import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react';
import './contact.scss';

const Contact = ({
  InputChange,
  contactMessage,
  contactFirstName,
  contactLastName,
  contactEmail,
  contactPhone,
  onSubmitContact,
}) => {
  const submitHandler = (event) => {
    event.preventDefault();

    onSubmitContact();
  };

  const changeHandler = (event) => {
    InputChange(event.target.name, event.target.value);
    // changeTextAreaValue(event.target.name, event.target.value);
  };

  return (
  <div id="contact">
    <Form onSubmit={submitHandler}>
    <Form.Group widths='equal'>
      <Form.Input
        onChange={changeHandler}
        value={contactFirstName}
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='Prénom'
        name='contactFirstName'
        placeholder='Prénom'
      />
      <Form.Input
        onChange={changeHandler}
        value={contactLastName}
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Nom'
        name='contactLastName'
        placeholder='Nom'
      />
      <Form.Input
        onChange={changeHandler}
        value={contactPhone}
        fluid
        id='form-subcomponent-shorthand-input-phone'
        label='Téléphone'
        name='contactPhone'
        style={{ minHeight: 10 }}
        placeholder='Téléphone'
      />
    </Form.Group>
      <Form.Field>
        <label>E-mail</label>
        <input 
        onChange={changeHandler}
        value={contactEmail}
        className="contactForm" 
        label='Mail' 
        name='contactEmail'
        placeholder='Votre e-mail' />
      </Form.Field>
      <label>Message</label>
      <TextArea 
      className="contactForm" 
      id='form-subcomponent-shorthand-input-mail'
      placeholder='Votre message' 
      style={{ minHeight: 100 }} 
      onChange={changeHandler}
      value={contactMessage}
      name='contactMessage'
      />

      <Button type="submit">Submit</Button>
      </Form>
  </div>
);
  }

Contact.propTypes = {
  contactLastName: PropTypes.string.isRequired,
  contactFirstName: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired,
  contactMessage: PropTypes.string.isRequired,
  contactPhone: PropTypes.number.isRequired,
  onSubmitContact: PropTypes.func.isRequired,
};

export default Contact; 
