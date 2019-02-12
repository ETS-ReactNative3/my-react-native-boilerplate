import { StyleSheet } from 'react-native';
import { ApplicationStyles, SelectionScreenStyles, Metrics, Fonts } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...SelectionScreenStyles,
  haveAccountContainer: {
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  haveAccountText: {
    ...ApplicationStyles.screen.subtitle,
    padding: undefined,
    marginBottom: undefined,
    paddingLeft: Metrics.smallMargin,
    paddingRight: Metrics.smallMargin,
    fontSize: Fonts.size.small
  },
  loginButtonContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    marginHorizontal: 5
  },
  loginButton: {
    paddingRight: 8,
    paddingLeft: 8
  },
  loginButtonText: {
    ...ApplicationStyles.buttons.buttonText,
    fontSize: Fonts.size.small
  }
});
