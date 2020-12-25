import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/styles";
import { colors } from "../../theme/colors";

const useStyles = makeStyles(({
  error:{
    fontSize: '0.9rem',
    color: colors.red,
    marginTop: '0.5rem'
  }
}))

const ErrorMessage = ({ errorMsg }) => {
  const classes = useStyles();
  console.log("error", errorMsg)
  return <p className={classes.error}>{errorMsg}</p>;
};

ErrorMessage.propTypes = {
    errorMsg: PropTypes.string
};

export default ErrorMessage;
