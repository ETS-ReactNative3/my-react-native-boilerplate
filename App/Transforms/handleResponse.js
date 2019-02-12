export default function handleReponse(response, message, error) {
  const { data } = response;
  if (!response.ok) {
    if (data) {
      throw data;
    } else {
      throw {
        code: response.problem,
        message: message || 'Request failed.',
        error: error || response
      };
    }
  }
  return response.data;
}
