import React, { createRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    width: 0,
    height: 0,
    overflow: "hidden",
  },
});

const UploadFileButton = ({ handleFilePicker, label }) => {
  const classes = useStyles();
  const input = createRef();
  const handleTrigger = () => {
    input.current.click();
  };
  return (
    <div>
      <input
        ref={input}
        className={classes.input}
        type="file"
        accept="image/*"
        style={{
          display: "none",
        }}
        onChange={handleFilePicker}
      />
      <Button onClick={handleTrigger}>{label}</Button>
    </div>
  );
};

UploadFileButton.propTypes = {
  handleFilePicker: PropTypes.func,
  label: PropTypes.func,
};

export default UploadFileButton;
