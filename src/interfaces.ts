export interface IProduct {
  id: number;
  attributes: {
    Product_slug: string;
    Title: string;
    Image?: string;
    Price?: number;
    "createdAt": string, //"2022-11-04T10:07:28.886Z"
    "updatedAt": string,
    "publishedAt": string,
  }
}

export interface IProductsInfo {
  data: IProduct[];
}

export interface IItemCard {
  "id": number,
  "amount": number,
  "product": IProduct
}

export interface IUser {
  "id": number;
  "username": string;
  "email": string;
  "provider": string;
  "confirmed": boolean;
  "blocked": false,
  "createdAt": string, //"2022-11-04T10:42:05.685Z",
  "updatedAt": string,
  "Cart": IItemCard[]
}

export interface ICartState {
  id: number;
  amount: number;
}