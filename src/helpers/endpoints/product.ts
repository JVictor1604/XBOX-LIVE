import { endpoint } from 'helpers/endpoints';

export const product = {
    createproduct: () => `${endpoint.baseUrl}/game`,
    listproduct: () => `${endpoint.baseUrl}/game`,
    productById: (id: string) => `${endpoint.baseUrl}/game/${id}`,
};