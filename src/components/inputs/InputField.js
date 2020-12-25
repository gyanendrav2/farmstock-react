import React from "react";
import { Form } from "react-bootstrap/";
import PropTypes from "prop-types";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { propTypes } from "react-bootstrap/esm/Image";
import { Box, Typography } from "@material-ui/core";

const InputField = ({
  label,
  iscompulsory,
  error,
  errorMsg,
  inputRegister,
  ...rest
}) => {
  return (
    <>
      <Box>
        <Typography>
          {label}
          <span className="text-danger">{iscompulsory ? "*" : ""}</span>
        </Typography>
        <Form.Control ref={inputRegister} {...rest} />
        <ErrorMessage errorMsg={errorMsg} />
      </Box>
    </>
  );
};

InputField.propTypes = {

  label: PropTypes.string,
  iscompulsory: propTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  inputRegister: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  as: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default InputField;
