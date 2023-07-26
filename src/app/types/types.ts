export interface AddedProduct {
  productId: number;
  size: string;
  sugar: boolean;
  quantity: number;
}

export interface ProductInCart extends AddedProduct {
  imgUrl: string;
  name: string;
  price: number;
}

export interface Product {
  data: any;
  id: number;
  name: string;
  imgUrl: string;
  price: { [key: string]: number };
  stamp: boolean;
  details: Details;
}

export interface Details {
  calories: number;
  totalFat: number;
  cholesterol: number;
  sodium: number;
  totalCarbohydrate: number;
  protein: number;
  vitaminD: number;
  cancium: number;
}
