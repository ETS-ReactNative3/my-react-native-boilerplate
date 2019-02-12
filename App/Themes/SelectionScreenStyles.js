import ApplicationStyles from './ApplicationStyles';
import Metrics from './Metrics';

const SelectionScreenStyles = {
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
  }
};

export default SelectionScreenStyles;
