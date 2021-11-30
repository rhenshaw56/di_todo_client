import { AxiosInstance } from 'axios';
import container from '../src/inversify.config';
import { IApiManager } from '../src/managers/interface';
import { ITodoClient } from '../src/clients/interface';
import * as types from '../src/types';


describe('Integration test', () => {

  it('should correctly inject the client as a manager dependency', async () => {
    const apiManager = container.get<IApiManager>(types.Manager);
    const todoClient = container.get<ITodoClient>(types.Client);
    const axiosInstance = container.get<AxiosInstance>(types.AxiosInstance);

    const managerFetch = jest.spyOn(apiManager, 'fetchData');
    const clientGet = jest.spyOn(todoClient, 'get');
    const axiosGet = jest.spyOn(axiosInstance, 'get');

    const data = await apiManager.fetchData();
    const expectedApiUrl = 'https://jsonplaceholder.typicode.com/todos';

    expect(apiManager.hasOwnProperty('_todoClient')).toBeTruthy;
    expect(managerFetch).toHaveBeenCalledTimes(1);
    expect(clientGet).toHaveBeenCalledTimes(1);
    expect(axiosGet).toHaveBeenCalledTimes(1);
    expect(axiosGet).toHaveBeenCalledWith(expectedApiUrl);

    expect(data.length).toBe(200);
    expect(data[0].userId).toBeTruthy();
    expect(data[0].title).toBeTruthy();


  });
})
