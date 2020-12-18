import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

// == Import scss
import '../editProfile.scss';

const FieldEdit = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  as,
  rows,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <>
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        as={as}
        rows={rows}
      />
    </>
  );
};

FieldEdit.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  as: PropTypes.string,
  rows: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FieldEdit.defaultProps = {
  value: '',
  as: 'input',
  type: 'text',
  rows: '',
};
export default FieldEdit;
