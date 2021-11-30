import { Todo } from '../types';

export interface ITodoClient {
	get(): Promise<Todo[]>;
}
