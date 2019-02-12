// if lastError is null and the next error is not, then show the error
// (new error received) if lastError is not null, AND the next error is
// empty, it could be other state changes being received. BUT if lastError
// and nextError aren't the same object, then its a new error. we cant
// just show the error each time nextError is not empty because other
// redux state changes trigger componentWillReceiveProps
export default function ifError(lastError, nextError) {
  return (
    (lastError === null && nextError !== null) ||
    (lastError !== null && nextError !== null && lastError !== nextError)
  );
}
