import { StackNavigator } from 'react-navigation';
import AppConfig from 'Config/AppConfig';
import AeroSignUpScreen from 'Containers/AeroSignUpScreen';
import SignUpScreen from 'Containers/SignUpScreen';
import EulaScreen from 'Containers/EulaScreen';
import LaunchScreen from 'Containers/LaunchScreen';

const { initialRoute } = AppConfig;

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    EulaScreen: { screen: EulaScreen },
    LaunchScreen: { screen: LaunchScreen },
    SignUpScreen: { screen: SignUpScreen },
    AeroSignUpScreen: { screen: AeroSignUpScreen },
  },
  {
    // Default config for all screens
    initialRouteName: 'EulaScreen',
  }
);

export default PrimaryNav;
