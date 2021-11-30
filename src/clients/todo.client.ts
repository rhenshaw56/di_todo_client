import { inject, injectable } from 'inversify';
import { AxiosInstance, AxiosResponse } from 'axios';

import { ITodoClient } from './interface';
import * as types from '../types';

@injectable()
export default class TodoClient implements ITodoClient {

  private _axios: AxiosInstance;
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    @inject(types.AxiosInstance) axios : AxiosInstance,
  ) {
    this._axios = axios;
  }

  async get(): Promise<types.Todo[]> {
    try{
      const response: AxiosResponse<types.Todo[]> = await this._axios.get(this.apiUrl);
      return response.data;
    } catch(e) {

      throw new Error('An error occurred while fetching data');
    }
  }
};
