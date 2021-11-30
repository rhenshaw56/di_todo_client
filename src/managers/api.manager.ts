import { inject, injectable } from 'inversify';

import { IApiManager } from "./interface";
import { ITodoClient } from "../clients/interface";
import * as types from '../types';

@injectable()
export default class ApiManager implements IApiManager {
  private _todoClient: ITodoClient;


  constructor(
    @inject(types.Client) todoClient : ITodoClient,
  ) {
    this._todoClient = todoClient;
  }

  async fetchData(): Promise<types.Todo[] | []> {
    try {
    const data = await this._todoClient.get();
    return data;
    } catch(e) {
      return [];
    }
  }

};
