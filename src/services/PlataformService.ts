import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { ErrorResponse } from "types/api/error";
import { plataform, plataformResponse } from "types/api/plataform";

export const TableService = {
  getLista: (): Promise<plataformResponse[]> =>
    Api(endpoint.listplataforms(), {
      method: "GET",
    }).then((response) => response.json()),

  create: (table: plataform) =>
    Api(endpoint.createplataform(), {
      method: "POST",
      body: JSON.stringify(table),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  getById: (id: string) =>
    Api(endpoint.plataformsById(id), {
      method: "GET",
    }).then((response) => response.json()),

  updateById: (plataform: plataformResponse): Promise<plataformResponse & ErrorResponse> =>
    Api(endpoint.plataformsById(plataform.id), {
      method: "PATCH",
      body: JSON.stringify({ number: plataform.plataform }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api(endpoint.plataformsById(id), {
      method: "DELETE",
    }).then((response) => response.json()),
};