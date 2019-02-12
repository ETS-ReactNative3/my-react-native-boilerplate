export default function handleError(error, code, message) {
  if (error instanceof Error) {
    return {
      code: code || 'error',
      message: message || error.message,
      error
    };
  }
  console.tron.log('returning error');
  console.tron.log(error);
  return error;
}
