import React from 'react';

// export default (...outerComponents) => wrappedComponent =>
//   nest(...outerComponents, wrappedComponent);

export default WrapperComponent => BaseComponent => props => (
  <WrapperComponent {...props}>
    <BaseComponent {...props} />
  </WrapperComponent>
);
