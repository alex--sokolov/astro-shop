export interface IProduct {
  id: string;
  attributes: {
    Product_id: string;
    Title: string;
    image?: string;
    Price?: number;
  }
}

export interface IProductsInfo {
  data: IProduct[],

}