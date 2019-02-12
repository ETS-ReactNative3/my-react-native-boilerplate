import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Fonts } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  titleTextContainer: {
    margin: Metrics.baseMargin
  },
  titleText: {
    ...ApplicationStyles.screen.subtitle,
    textAlign: 'left'
  },
  selectionButtonGroup: {
    ...ApplicationStyles.groupContainer,
    margin: Metrics.doubleBaseMargin,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  selectionButtonContainer: {
    ...ApplicationStyles.screen.sectionMarginBottom,
    padding: undefined,
    alignSelf: 'stretch'
  },
  selectionButton: {
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
