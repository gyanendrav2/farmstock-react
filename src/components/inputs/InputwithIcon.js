import { Box, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Input from ".";
import Typography from "../typography";
import colors from "../colors";

const useStyles = makeStyles({
  label: {
    marginBottom: "0.5rem",
    fontSize:"0.85rem",
    fontWeight: 400,
  },
  input: {
    width: "100%",
    fontFamily: 'aino-regular',
    
    "& ::placeholder": {
      color: colors.blueLight1,
      opacity: 1,
      fontSize:"0.75rem",
    },
  },
});

const InputWithIcon = ({ label, ...props }) => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Typography className={classes.label}>{label}</Typography>
      <Input {...props} />
    </Box>
  );
};

InputWithIcon.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};
export default InputWithIcon;
