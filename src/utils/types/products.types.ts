export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  currency: string;
  slug: string;
}

export interface Paging {
  total_products: number;
  total_pages: number;
  current_page: number;
}

export interface ProductResponse {
  products: Product[];
  paging: Paging;
}