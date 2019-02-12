import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.buttons,
  inputGroup: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginHorizontal: Metrics.doubleBaseMargin,
  },
  firstInputContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin,
  },
  nextButtonContainer: {
    ...ApplicationStyles.buttons.buttonContainer,
    margin: undefined,
    marginTop: Metrics.baseMargin,
  },
});
