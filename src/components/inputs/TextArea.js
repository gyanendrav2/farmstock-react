import React from "react";
import styled, { css } from "styled-components";
import colors from "../colors";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles } from "@material-ui/core";
import Typography from "../typography";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const TextAreaComponent = styled.textarea(
  ({ error, disabled }) => css`
    padding: "0.5rem";
    outline: none;
    width: calc(100% - 5px);
    margin: 0;
    font-size:"0.85rem";
    font-weight: 400;
    border-radius: 8px;
    resize: none;
    font-family: 'aino-regular';
    background-color: ${colors.white};
    border: solid 1px ${error ? colors.red : colors.blueLight1};
    :focus-within {
      border-color: ${error ? colors.red : colors.blue};
      :hover {
        border-color: ${error ? colors.red : colors.blue};
      }
    }
    :hover {
      border-color: ${colors.blue};
    }
    ${disabled &&
    `
    > input {
      cursor: not-allowed;
      opacity: .5;
    }
    opacity: .5;
  `}
    ::placeholder {
      color:${error ? colors.red : colors.blueLight1}; 
      font-size:0.75rem;
    }
  `
);

const useStyles = makeStyles(({
  label: {
    marginBottom: "0.5rem",
    fontSize:"0.85rem",
    fontWeight: 400,
  },
  count:{
    color: colors.grayLight3,
    fontSize: '0.75rem'
  }
}))

const TextArea = ({label, count, limit, name, inputRegister, errorMsg, ...props}) => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container alignItems="center" justify="space-between">
      <Typography className={classes.label}>{label}</Typography>
      <Typography className={classes.count}>{String(count).length+'/'+limit}</Typography>
      </Grid>
    <TextAreaComponent
      error={errorMsg?.message ? true : false}
      name={name}
      ref={inputRegister}
      {...props}
      onChange={(e) => {
        e.preventDefault();
        props.onChange && props.onChange(e.target.value);
      }}
    />
    <ErrorMessage error={errorMsg}/>
    </Box>
  );
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
  label: PropTypes.string,
  count: PropTypes.string,
  limit: PropTypes.string,
  name: PropTypes.string,
  inputRegister: PropTypes.string,
  errorMsg: PropTypes.string
};

export default TextArea;
