import * as React from 'react';
import { Input, Item } from 'native-base';
import styles from './Styles/InputFieldStyle';

export default class InputField extends React.PureComponent {
  // Defaults for props
  static defaultProps = {
    inputRefs: {},
    nextField: '',
    itemProps: {
      regular: true,
    },
    inputProps: {
      style: styles.darkText,
      placeholder: 'Enter text...',
    },
  };

  getInputProps() {
    const { inputProps } = this.props;
    return Object.assign({}, InputField.defaultProps.inputProps, inputProps);
  }

  getItemProps() {
    const { itemProps } = this.props;
    return Object.assign({}, InputField.defaultProps.itemProps, itemProps);
  }

  render() {
    // const { error, touched, ...props } = this.props;
    // console.log(error, touched, props);
    const itemProps = this.getItemProps();
    const inputProps = this.getInputProps();
    const { children } = this.props;

    return (
      <Item {...itemProps}>{children ? children(inputProps) : <Input {...inputProps} />}</Item>
    );
  }
}
