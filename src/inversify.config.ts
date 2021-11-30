import 'reflect-metadata';
import { Container } from 'inversify';
import axios, { AxiosInstance } from 'axios';

import { ITodoClient } from './clients/interface';
import { IApiManager } from './managers/interface';

import App from './app';
import TodoClient from './clients/todo.client';
import ApiManager from './managers/api.manager';
import * as types from './types';

const container = new Container();

container.bind<ITodoClient>(types.Client).to(TodoClient).inSingletonScope();
container.bind<IApiManager>(types.Manager).to(ApiManager).inSingletonScope();
container.bind<AxiosInstance>(types.AxiosInstance).toConstantValue(axios);
container.bind<App>(App).toSelf();

export default container;
