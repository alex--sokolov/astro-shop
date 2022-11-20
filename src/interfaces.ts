export interface IImage {
  id: number;
  attributes: {
    name: string; //'hero_mba_m2__ejbs627dj7ee_large.jpg',
    'alternativeText': string; //'hero_mba_m2__ejbs627dj7ee_large.jpg',
    'caption': string; //'hero_mba_m2__ejbs627dj7ee_large.jpg',
    'width': number; // 431,
    'height': number; //261,
    'formats': {
      'thumbnail': {
        'name': string; //'thumbnail_hero_mba_m2__ejbs627dj7ee_large.jpg',
        'hash': string; //'thumbnail_hero_mba_m2_ejbs627dj7ee_large_3871b3411f',
        'ext': string; //'.jpg',
        'mime': string; //'image/jpeg',
        'path': any, // null,
        'width': number; // 245,
        'height': number; // 148,
        'size': number; // 9.51,
        'url': string; // '/uploads/thumbnail_hero_mba_m2_ejbs627dj7ee_large_3871b3411f.jpg'
      }
    },
    'hash': string; // 'hero_mba_m2_ejbs627dj7ee_large_3871b3411f',
    'ext': string; // '.jpg',
    'mime': string; // 'image/jpeg',
    'size': number; // 23.61,
    'url': string; // '/uploads/hero_mba_m2_ejbs627dj7ee_large_3871b3411f.jpg',
    'previewUrl': any; // null,
    'provider': string; // 'local',
    'provider_metadata': any; // null,
    'createdAt': string; // '2022-11-04T15:57:43.451Z',
    'updatedAt': string; // '2022-11-04T15:57:43.451Z'
  }
}

export interface IImageData {
  data: IImage[];
}

export interface IProduct {
  id: number;
  attributes: {
    Product_slug: string;
    Title: string;
    Image?: IImageData;
    Price?: number;
    'createdAt': string; //"2022-11-04T10:07:28.886Z"
    'updatedAt': string;
    'publishedAt': string;
  };
}

export interface IProductCart {
  id: number;
  amount: number;
  product: {
    'id': number;
    'Title': string;
    'Price': number;
    'createdAt': string;
    'updatedAt': string;
    'publishedAt': string;
    'Product_slug': string;
  };
}

export interface IProductsInfoOne {
  data: IProduct;
  meta: any;
}

export interface IProductsInfo {
  data: IProduct[];
}

export interface IItemCard {
  'id': number,
  'amount': number,
  'product': IProduct
}

export interface IUser {
  'id': number;
  'username': string;
  'email': string;
  'provider': string;
  'confirmed': boolean;
  'blocked': false,
  'createdAt': string, //"2022-11-04T10:42:05.685Z",
  'updatedAt': string,
  'Cart': IItemCard[]
}

export interface ICartState {
  id: number;
  amount: number;
}