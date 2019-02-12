import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Input } from 'native-base';
import styles from './Styles/FormInputStyle';

const FormikInput = ({
  formikProps: { handleChange, values },
  inputProps: { name, ...inputProps },
}) => <Input {...inputProps} onChangeText={handleChange(name)} value={values[name]} />;

FormikInput.propTypes = {
  formikProps: PropTypes.object.isRequired,
  inputProps: PropTypes.object.isRequired,
};

export default FormikInput;
