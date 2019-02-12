import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Row, Grid } from 'react-native-easy-grid';
import { Button, Input, Item, Text as NText, Content, Root } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { compose } from 'recompose';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import makeInputGreatAgain, {
//   withNextInputAutoFocusForm,
//   withNextInputAutoFocusInput,
// } from 'react-native-formik';
import { showErrorToaster } from 'Utils/Toaster';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserActions from 'Redux/UserRedux';

// Components
import LogoHeader from 'Components/LogoHeader';
import AeroSignUpForm from 'Components/AeroSignUpForm';

// Styles
import styles from './Styles/AeroSignUpScreenStyle';

// const FormView = props => (
//   <KeyboardAvoidingView
//     style={styles.container}
//     behavior="height"
//     enabled={false}
//   >
//     {props.children}
//   </KeyboardAvoidingView>
// );

// const FormField = compose(
//   makeInputGreatAgain,
//   withNextInputAutoFocusInput,
// )(InputField);
// const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('please! email?')
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(2, 'pretty sure this will be hacked'),
});

// const validate = (values) => {
//   const error = {};
//   error.email = '';
//   error.name = '';
//   const {
//     email, username, password, confirmPassword,
//   } = values;

//   // if (values.email === undefined) {
//   //   email = '';
//   // }
//   // if (email.length < 8 && email !== '') {
//   //   error.email = 'too short';
//   // }
//   // if (!email.includes('@') && email !== '') {
//   //   error.email = '@ not included';
//   // }
//   return error;
// };

class AeroSignUpScreen extends Component {
  // eslint-disable-next-line

  constructor() {
    super();
    this.inputs = {};
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // this.showError(nextProps);
    // this.checkForSignUpSuccess(nextProps);
  }

  // onSubmit() {
  // if (!email) {
  //   showErrorToaster('Email required');
  //   return;
  // }
  // if (!username) {
  //   showErrorToaster('Username required');
  //   return;
  // }
  // if (!password) {
  //   showErrorToaster('Password required');
  //   return;
  // }
  // if (!confirmPassword) {
  //   showErrorToaster('Confirmation password required');
  //   return;
  // }
  // if (password !== confirmPassword) {
  //   showErrorToaster('Passwords do not match');
  //   return;
  // }
  // this.props.signUp({
  //   email,
  //   username,
  //   password,
  // });
  // }

  showError(nextProps) {
    const { showError, message } = nextProps.user;

    if (showError) {
      const { dismissError } = this.props;
      showErrorToaster(message);
      dismissError();
    }
  }

  checkForSignUpSuccess(nextProps) {
    const { code } = nextProps.payload || {};
    const {
      navigation: { navigate },
    } = this.props;
    if (code === 'success') {
      navigate('InterestScreen');
    }
  }

  // renderField({
  //   input,
  //   label,
  //   type,
  //   meta: { touched, error, warning },
  //   ...rest
  // }) {
  //   const { nextField } = rest;
  //   const { name: inputName } = input;
  //   return (
  //     <InputField
  //       inputProps={{
  //         ...input,
  //         ...rest,
  //       }}
  //       itemProps={{ error: error !== undefined }}
  //       // ref={(input) => {
  //       //   this.inputs[inputName] = input;
  //       // }}
  //     />
  //   );
  // }

  // renderForm() {
  //   retujrn (
  // <FormView>
  //   <View style={styles.inputGroup}>
  //     <View style={styles.emailInputContainer}>
  //       <FormField
  //         name="email"
  //         style={styles.darkText}
  //         placeholder="email"
  //         keyboardType="email-address"
  //         returnKeyType="next"
  //         autoCapitalize="none"
  //       />
  //     </View>
  //     <View style={styles.inputContainer} />
  //     <View style={styles.inputContainer} />
  //     <View style={styles.inputContainer} />
  //     <View style={styles.nextButtonContainer}>
  //       <Button style={styles.button}>
  //         <NText style={styles.buttonText}>Next </NText>
  //         <Icon style={styles.buttonText} name="chevron-right" />
  //       </Button>
  //     </View>
  //   </View>
  // </FormView>
  //   );
  // }

  // renderForm({ handleChange, handleSubmit, values }) {
  //   return (
  //     <FormView>
  //       <View style={styles.inputGroup}>
  //         <View style={styles.emailInputContainer}>
  //           {/* <FormField
  //             name="email"
  //             style={styles.darkText}
  //             placeholder="email"
  //             keyboardType="email-address"
  //             returnKeyType="next"
  //             autoCapitalize="none"
  //             value={values.email}
  //             onChangeText={handleChange("email")}
  //           /> */}
  //         </View>
  //         <View style={styles.inputContainer} />
  //         <View style={styles.inputContainer} />
  //         <View style={styles.inputContainer} />
  //         <View style={styles.nextButtonContainer}>
  //           <Button style={styles.button} onPress={handleSubmit}>
  //             <NText style={styles.buttonText}>Next </NText>
  //             <Icon style={styles.buttonText} name="chevron-right" />
  //           </Button>
  //         </View>
  //       </View>
  //     </FormView>
  //   );
  // }

  static renderInput(formikProps, inputProps) {
    const { values, handleChange } = formikProps;
    const { name } = inputProps;
    const { [name]: value } = values;
  }

  render() {
    console.log(this.props);
    return (
      <Root>
        <Grid>
          <Row>
            <Content>
              <Formik onSubmit={values => console.log(values)} validationSchema={validationSchema}>
                {formikProps => (
                  <AeroSignUpForm formikProps={formikProps} />
                  // <View style={styles.inputGroup}>
                  //   <View style={styles.nextButtonContainer}>
                  //     <Button style={styles.button} onPress={formikProps.handleSubmit}>
                  //       <NText style={styles.buttoText}>Next </NText>
                  //       <Icon style={styles.buttonText} name="chevron-right" />
                  //     </Button>
                  //   </View>
                  // </View>
                )}
              </Formik>
            </Content>
          </Row>
        </Grid>
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  signUp(data) {
    dispatch(UserActions.signUpRequest('aero', data));
  },
  dismissError() {
    dispatch(UserActions.dismissError());
  },
});

const aeroSignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AeroSignUpScreen);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(aeroSignUpScreen);
