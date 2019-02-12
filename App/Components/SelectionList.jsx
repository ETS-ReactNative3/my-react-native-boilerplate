import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button, Text as NText } from 'native-base';

import styles from './Styles/SelectionListStyle';

export default class SelectionList extends Component {
  // eslint-disable-next-line
  static propTypes = {
    title: PropTypes.string.isRequired,
    selections: PropTypes.array.isRequired
  };

  renderButton(selection, i) {
    return selection.subText ? (
      <View key={i} style={styles.selectionButtonContainer}>
        <Button
          block
          style={styles.selectionButton}
          onPress={() => selection.onPress(selection, i)}
        >
          <View style={styles.twoLineButtonContents}>
            <NText style={styles.buttonText}>{selection.text}</NText>
            <NText style={styles.subButtonText}>{selection.subText}</NText>
          </View>
        </Button>
      </View>
    ) : (
      <View key={i} style={styles.selectionButtonContainer}>
        <Button
          block
          style={styles.selectionButton}
          onPress={() => selection.onPress(selection, i)}
        >
          <NText style={styles.buttonText}>{selection.text}</NText>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
        <View style={styles.selectionButtonGroup}>
          {this.props.selections.map((selection, i) => this.renderButton(selection, i))}
        </View>
      </View>
    );
  }
}
