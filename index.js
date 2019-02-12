import './App/Config/ReactotronConfig';
import { AppRegistry, YellowBox } from 'react-native';
import App from './App/Containers/App';

// eslint-disable-next-line
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires main queue setup',
  'Require cycle:'
]);
AppRegistry.registerComponent('Aero', () => App);
