import { OrderItemType } from "types/ordemItemType";
  
  export interface Order {
    userId: string;
    plataform: string;
    products: OrderItemType[];
  }
  