import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    logo: {
      marginTop: Metrics.marginVertical,
      height: 200,
      width: Metrics.screenWidth,
      resizeMode: 'contain'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionMarginTop: {
      padding: Metrics.baseMargin,
      marginTop: Metrics.section
    },
    sectionMarginBottom: {
      padding: Metrics.baseMargin,
      marginBottom: Metrics.section
    },
    sectionMarginLeft: {
      padding: Metrics.baseMargin,
      marginLeft: Metrics.section
    },
    sectionMarginRight: {
      padding: Metrics.baseMargin,
      marginRight: Metrics.section
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.coal,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      ...Fonts.style.normal,
      color: Colors.coal,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    darkText: {
      ...Fonts.style.normal,
      color: Colors.coal
    },
    lightText: {
      ...Fonts.style.normal,
      color: Colors.snow
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  },
  buttons: {
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      margin: Metrics.baseMargin,
      paddingBottom: Metrics.baseMargin,
      justifyContent: 'space-between'
    },
    button: {
      paddingLeft: 16,
      paddingRight: 16
    },
    buttonText: {
      ...Fonts.style.normal,
      paddingLeft: 0,
      paddingRight: 0,
      color: Colors.snow,
      textAlign: 'center'
    },
    toastButton: {
      alignSelf: 'center',
      borderRadius: Metrics.buttonRadius,
      borderColor: Colors.snow,
      borderWidth: 1,
      height: 45
    },
    toastButtonText: {
      alignSelf: 'center',
      ...Fonts.style.normal,
      color: Colors.snow
    }
  }
};

export default ApplicationStyles;
