import type { IProductsInfo } from '../interfaces';

export const getProducts = async (): Promise<IProductsInfo | Response> => {
  const url = import.meta.env.STRAPI_SERVER + import.meta.env.ALL_PRODUCTS_URL+'?populate=%2A';

  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
};