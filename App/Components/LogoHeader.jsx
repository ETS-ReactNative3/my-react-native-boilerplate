import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Images } from '../Themes';
import styles from './Styles/LogoHeaderStyle';

export default class LogoHeader extends Component {
  render() {
    return (
      <View style={styles.headerLogoContainer}>
        <Image source={Images.logo} style={styles.logo} />
      </View>
    );
  }
}
