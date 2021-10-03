const fetch = require('node-fetch');

export class FetchService {
  public static async get<T>(url: string, headers?: any): Promise<T> {
    const resp = await fetch(url, {method: 'GET', headers: headers});
    return resp.json();
  }
}
