import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles/InputGroupStyle';

// export default WrappedComponent => {
//   const hocComponent = props => (
//     <View style={styles.inputGroup}>
//       <WrappedComponent {...props} />
//     </View>
//   );

//   hocComponent.propTypes = {};

//   return hocComponent;
// };

const InputGroup = ({ children }) => <View style={styles.inputGroup}>{children}</View>;

InputGroup.propTypes = {
  children: PropTypes.array.isRequired,
};

export default InputGroup;
