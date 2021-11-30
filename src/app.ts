import { inject, injectable } from 'inversify';
import { IApiManager } from './managers/interface';

import * as types from './types';
@injectable()
export default class App {
    private _apiManager: IApiManager;

    constructor(
        @inject(types.Manager) apiManager: IApiManager,
    ) {
        this._apiManager = apiManager;
        this.init();
    }

    async init() {
        console.log('Application started');
        const data = await this._apiManager.fetchData();
        console.log(data);
    }
}
