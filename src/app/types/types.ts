// export type Product = {
//   id: number;
//   name: string;
//   img: string;
//   price: [number, number];
//   stamp: boolean;
//   details: [string, number];
// };

export interface Product {
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
