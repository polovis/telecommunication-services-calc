export interface Offer {
  year: number;
  standardOffer: ProductData;
  promo: ProductData;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductData {
  [key: number]: Product;
}

export type Products = { [key: number]: Offer };

export type CheckboxStatus = {
  [key: number]: boolean;
};

export type HandleSetCheckboxStatus = {
  [key: number]: React.Dispatch<React.SetStateAction<boolean>>;
};

export enum ProductIDs {
  INTERNETID = 0,
  TVID = 1,
  TELEPHONEID = 2,
  DECODEID = 3,
  INTERNETANDTVID = 4,
  INTERNETANDTELEPHONEID = 5,
}
