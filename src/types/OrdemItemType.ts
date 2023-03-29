import { ProductResponse } from "types/Product";

export interface OrderItemType {
  product: ProductResponse;
  quantity: number;
  observation?: string;
}
