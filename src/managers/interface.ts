import { Todo } from '../types';

export interface IApiManager {
	fetchData(): Promise<Todo[] | []>;
}
