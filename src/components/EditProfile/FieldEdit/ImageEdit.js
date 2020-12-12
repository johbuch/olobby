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
    onChange(evt.target.value);
    // URL.createObjectURL(evt.target.files[0]);
    // console.log('IMAGE URL', URL.createObjectURL(evt.target.files[0]));
    console.log(evt.target.value);
  };
  return (
    <>
      <Form.File id="formcheck-api-custom" custom>
        <Form.File.Input isValid onChange={handleChange} />
        <Form.File.Label data-browse="Choisissez votre image">
          {value}
        </Form.File.Label>
      </Form.File>

      {/*
      <FileInputComponent
        // onChange={handleChange}
        labelText={value}
        labelStyle={{fontSize:14,color:'rgba(255,255,255,1)'}}
        multiple={false}
        callbackFunction={(evt)=>{onChange(evt.target.value)}}
        accept="image/*"
      />
      */}
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
