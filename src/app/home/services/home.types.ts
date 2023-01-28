export interface HeaderCategories {
  id: string;
  name: string;
  image: string;
  link: string;
}

export interface CarouselImages {
  id: string;
  image: string;
  link: string;
}

export interface ProductDetails {
  productTitle: string;
  products: Products[];
}

export interface Products {
  productID: string;
  productName: string;
  productImage: string;
  productPrice: string;
  productBrand: string;
}
