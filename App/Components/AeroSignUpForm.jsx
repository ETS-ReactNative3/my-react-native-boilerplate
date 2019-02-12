import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Components
import wrap from 'Components/wrap';
import InputGroup from 'App/Components/InputGroup';
import LogoHeader from 'Components/LogoHeader';
import FormikInput from 'Components/FormikInput';
import InputField from 'Components/InputField';

import styles from './Styles/AeroSignUpFormStyle';

const SignUpField = ({ formikProps, ...props }) => (
  <InputField
    inputProps={{
      ...props,
    }}
  >
    {inputProps => <FormikInput formikProps={formikProps} inputProps={inputProps} />}
  </InputField>
);

SignUpField.propTypes = {
  formikProps: PropTypes.object.isRequired,
};

const AeroSignUpForm = ({ formikProps }) => (
  <InputGroup>
    <SignUpField formikProps={formikProps} name="email" placeholder="email" />
    <SignUpField formikProps={formikProps} name="username" />
  </InputGroup>
);

AeroSignUpForm.propTypes = {
  formikProps: PropTypes.object.isRequired,
};

export default AeroSignUpForm;
