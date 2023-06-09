import { auth } from './auth';
import { order } from './order';
import { product } from './product';
import { plataform } from './plataform';
import { user } from './user';

export const endpoint = {
    baseUrl: "https://pizza-fresh-server.herokuapp.com",
    ...auth,
    ...user,
    ...order,
    ...plataform,
    ...product,
};