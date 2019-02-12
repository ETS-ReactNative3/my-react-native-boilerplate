import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  render() {
    console.log('test');
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>test</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
