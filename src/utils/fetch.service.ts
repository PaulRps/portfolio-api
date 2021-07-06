const fetch = require('node-fetch');

export class FetchService {
  public static async get(url: string): Promise<any> {
    const resp = await fetch(url);
    return resp.json();
  }
}
