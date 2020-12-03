import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

// == Import scss
import '../login.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{placeholder}</Form.Label>
        <Form.Control className="input_color" type={type} placeholder={placeholder} onChange={handleChange} value={value} name={name} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};
export default Field;
