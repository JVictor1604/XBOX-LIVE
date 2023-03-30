import { endpoint } from 'helpers/endpoints';

export const plataform = {
    createplataform: () => `${endpoint.baseUrl}/plataform`,
    listplataforms: () => `${endpoint.baseUrl}/plataform`,
    plataformsById: (id: string) => `${endpoint.baseUrl}/plataform/${id}`,
};