import React from 'react';

const Form = ({ handleSubmit, handleChange, value, buttonAvailability }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="textInput">
      <input id="textInput" type="text" onChange={handleChange} value={value} />
    </label>
    <button type="submit" disabled={buttonAvailability}>
      Add todo
    </button>
  </form>
);

export default Form;
