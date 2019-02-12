import { StyleSheet } from 'react-native';
import { Toast } from 'native-base';
import { ApplicationStyles } from 'Themes';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.buttons
});

export function showToaster(options) {
  const { text, textStyle, buttonTextStyle, buttonText, buttonStyle, type, duration } = options;
  const toastOptions = {
    message: text,
    textStyle: textStyle || styles.lightText,
    buttonTextStyle: buttonTextStyle || styles.toastButtonText,
    buttonText: buttonText || 'Okay',
    buttonStyle: buttonStyle || styles.toastButton,
    type,
    duration: duration || 3000
  };
  Toast.show(toastOptions);
}

export function showErrorToaster(message) {
  const toastOptions = {
    text: message || 'An error occurred, please try again later',
    textStyle: styles.lightText,
    buttonTextStyle: styles.toastButtonText,
    buttonText: 'Okay',
    buttonStyle: styles.toastButton,
    type: 'danger',
    duration: 3000
  };
  Toast.show(toastOptions);
}
