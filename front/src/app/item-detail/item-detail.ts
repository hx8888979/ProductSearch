export class ItemDetail {
  info: Info;
  photos: string[];
  shipping: Shipping;
  seller: Seller;
  similarProducts: SimilarProduct[];
}

export class Info {
  image: string[];
  url: string;
  itemSpecifics: [];
}

export class Shipping {
  shippingCost: string;
  shippingLocation: string;
  handlingTime: string;
  expeditedShipping: string;
  oneDayShipping: string;
  returnAccepted: string;
}

export class Seller {
  id: string;
  feedbackScore: string;
  popularity: string;
  feedbackRatingStar: string;
  topRated: string;
  storeName: string;
  buyProductAt: string;
}

export class SimilarProduct {
  image: string;
  productName: string;
  price: string;
  shippingCost: string;
  daysLeft: string;
  url: string;
}
