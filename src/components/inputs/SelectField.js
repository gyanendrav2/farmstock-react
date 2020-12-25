import React from 'react';
import { Form } from 'react-bootstrap/';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { propTypes } from 'react-bootstrap/esm/Image';
import { uuid as uuidv4 } from 'uuid';

const SelectField = ({ label, iscompulsory, error, errorMsg, inputRegister, options, ...rest }) => {
    return (
        <>
            <Form.Group>
                <Form.Label>
                    {label}
                    <span className="text-danger">{iscompulsory ? '*' : ''}</span>
                </Form.Label>
                <Form.Control as="select" ref={inputRegister} {...rest}>
                    <option value="" hidden>
                        --{label}--
                    </option>

                    {options.map((item) => (
                        <option key={uuidv4()} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </Form.Control>
                <ErrorMessage errorMsg={errorMsg} />
            </Form.Group>
        </>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    iscompulsory: propTypes.string,
    error: PropTypes.bool,
    errorMsg: PropTypes.string,
    inputRegister: PropTypes.func,
    options: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
};

export default SelectField;
