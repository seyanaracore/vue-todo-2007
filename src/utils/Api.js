class Api {
  __request(url, method) {
    return fetch(url, { method });
  }

  async get(url) {
    try {
      const response = await this.__request(url, "GET");
      return response.json();
    } catch (e) {
      console.error(e);
    }
  }
}

export default new Api();
