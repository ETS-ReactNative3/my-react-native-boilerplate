import Router from './Router';

export default class ApiRouter extends Router {
  get routes() {
    return {
      '/': this.getRoot,
    };
  }

  getRoot(req, res) {
    const message = 'Got api base route successfully!';
    res.payload({ message });
  }
}
