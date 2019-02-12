import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Row, Grid } from 'react-native-easy-grid';
import { Button, Text as NText } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from 'Services/Api';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserActions from 'Redux/UserRedux';

// Components
import LogoHeader from '../Components/LogoHeader';

// Styles
import styles from './Styles/SignUpScreenStyle';
import SelectionList from '../Components/SelectionList';

const api = API.create();

class SignUpScreen extends Component {
  // eslint-disable-next-line
  static navigationOptions = {
    header: <LogoHeader />
  };

  // eslint-disable-next-line
  selections = [
    {
      text: 'With Google',
      onPress: () => this.onSelectionButtonPress('google')
    },
    {
      text: 'With Facebook',
      onPress: () => this.onSelectionButtonPress('facebook')
    },
    {
      text: 'With Username and Password',
      onPress: () => this.onSelectionButtonPress('aero')
    }
  ];

  componentWillReceiveProps(nextProps) {
    const { isFocused } = this.props.navigation;
    if (isFocused() && nextProps.user !== null) {
      this.props.protectedEndpoint();
    }
  }

  onSelectionButtonPress(selection) {
    const { navigate } = this.props.navigation;
    if (selection === 'aero') {
      navigate('AeroSignUpScreen');
    } else {
      this.props.signUp(selection);
    }
  }

  render() {
    return (
      <Grid>
        <Row size={3}>
          <SelectionList title="Sign up," selections={this.selections} />
        </Row>
        <Row size={1}>
          <View style={styles.container}>
            <View style={styles.haveAccountContainer}>
              <Text style={styles.haveAccountText}>Already have a Aero account?</Text>
              <View style={styles.loginButtonContainer}>
                <Button small style={styles.loginButton}>
                  <NText style={styles.loginButtonText}>Login </NText>
                  <Icon style={styles.loginButtonText} name="chevron-right" />
                </Button>
              </View>
            </View>
          </View>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  social: state.social,
  user: state.user.user,
  accessToken: state.user.accessToken
});

const mapDispatchToProps = dispatch => ({
  signUp(provider) {
    dispatch(UserActions.signUpRequest(provider, {}));
  },
  protectedEndpoint() {
    dispatch(UserActions.protectedEndpointRequest());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen);
