import type { IProductsInfo, IProductsInfoOne } from '../interfaces';

export const getProducts = async (): Promise<IProductsInfo | Response> => {
  const url = import.meta.env.STRAPI_SERVER + import.meta.env.ALL_PRODUCTS_URL+'?populate=*';

  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
};

export const getProductById = async(id: string): Promise<IProductsInfoOne | Response> => {
  const url = `${import.meta.env.STRAPI_SERVER}${import.meta.env.ALL_PRODUCTS_URL}/${id}?populate=*`;

  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
}