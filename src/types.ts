export const Manager = Symbol.for('ApiManager');
export const Client = Symbol.for('ApiClient');
export const AxiosInstance = Symbol.for('AxiosInstance');

export interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}
