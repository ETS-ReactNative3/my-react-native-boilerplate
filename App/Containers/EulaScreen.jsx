import React, { Component } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text as NText } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Components
import LogoHeader from '../Components/LogoHeader';

// Styles
import styles from './Styles/EulaScreenStyle';

class EulaScreen extends Component {
  // eslint-disable-next-line
  static navigationOptions = {
    header: <LogoHeader />
  };

  constructor() {
    super();
    this.state = {
      eulaString: Array(45)
        .fill('IronTightEULA')
        .join(' ')
    };
  }

  onDisagreePress() {
    console.log('disagree');
  }

  onAgreePress() {
    const { navigate } = this.props.navigation;
    navigate('SignUpScreen');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <View>
            <Text style={styles.sectionText}>{this.state.eulaString}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              danger
              onPress={() => {
                this.onDisagreePress();
              }}
            >
              <NText style={styles.buttonText}>I disagree</NText>
            </Button>
            <Button
              style={styles.button}
              onPress={() => {
                this.onAgreePress();
              }}
            >
              <NText style={styles.buttonText}>I agree </NText>
              <Icon style={styles.buttonText} name="chevron-right" />
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EulaScreen);
