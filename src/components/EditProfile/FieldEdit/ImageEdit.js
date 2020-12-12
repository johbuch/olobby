import React from 'react';
import PropTypes from 'prop-types';

import FileInputComponent from 'react-file-input-previews-base64';

import Form from 'react-bootstrap/Form';

// == Import scss
import '../editProfile.scss';

const ImageEdit = ({
  value,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(URL.createObjectURL(evt.target.files[0]));
  };
  return (
    <>
      <Form.File id="formcheck-api-custom" custom>
        <Form.File.Input isValid onChange={handleChange} />
        <Form.File.Label data-browse="Choisissez votre image">
          Votre image
        </Form.File.Label>
      </Form.File>
    </>
  );
};

ImageEdit.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ImageEdit.defaultProps = {
  value: 'Votre Image',
};
export default ImageEdit;
