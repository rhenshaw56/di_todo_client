import 'reflect-metadata';
import mockAxios from 'jest-mock-axios';
import TodoClient from '../../../src/clients/todo.client';

const expectedApiUrl = 'https://jsonplaceholder.typicode.com/todos';


describe('TodoClient', () => {
  afterEach(() => {
    mockAxios.reset();
  });
  describe('when http call is successful', () => {
    it('should return the axios response data', async () => {
      const todos = [
        { userId: 1, title: 'Foo', completed: true },
        { userId: 2, title: 'Bar', completed: false },
      ];
      const response = {
        data: todos,
      } as any;

      const axiosGet = jest.spyOn(mockAxios, 'get').mockReturnValue(response);

      const todoClient = new TodoClient(mockAxios as any);
      const data = await todoClient.get();

      expect(axiosGet).toHaveBeenCalledWith(expectedApiUrl);
      expect(data).toEqual(todos);
    });
  });

  describe('when http call is not successful', () => {
    it('should catch the error', async () => {

      const axiosGet = jest.spyOn(mockAxios, 'get').mockImplementation(() => {
        throw 'Some http error';
      });

      const todoClient = new TodoClient(mockAxios as any);
      await todoClient.get().catch((err) => {
        expect(axiosGet).toHaveBeenCalledWith(expectedApiUrl);
        expect(err).toEqual(new Error("An error occurred while fetching data"));
      });
    });
  });
});
