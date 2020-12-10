import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

// == Import scss
import '../editProfile.scss';

const FieldEdit = ({
  value,
  type,
  name,
  label,
  onChange,
  id,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <>
      <Form.Check
        type={type}
        label={label}
        value={value}
        id={id}
        onChange={handleChange}
        name={name}
      />
    </>
  );
};

FieldEdit.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FieldEdit.defaultProps = {
  value: '',
  type: 'radio',
};
export default FieldEdit;
