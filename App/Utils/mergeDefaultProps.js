export default function(defaultProps, props) {
  const mergedProps = Object.assign({}, props);
  Object.entries(defaultProps).forEach(([key]) => {
    const prop = mergedProps[key];
    const defaultProp = defaultProps[key];
    if (typeof prop === 'object' && typeof defaultProp === 'object') {
      mergedProps[key] = Object.assign({}, defaultProps[key], mergedProps[key]);
    }
  });
  return mergedProps;
}
