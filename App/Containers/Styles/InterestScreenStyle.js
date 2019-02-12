import { StyleSheet } from 'react-native';
import { ApplicationStyles, SelectionScreenStyles, Metrics, Fonts } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...SelectionScreenStyles,
  wellnessButton: {
    height: 60
  },
  twoLineButtonContents: {
    flexDirection: 'column',
    paddingVertical: Metrics.smallMargin
  },
  buttonText: {
    ...ApplicationStyles.screen.lightText,
    alignSelf: 'center'
  },
  subButtonText: {
    ...ApplicationStyles.screen.lightText,
    alignSelf: 'center',
    fontSize: Fonts.size.small
  }
});
