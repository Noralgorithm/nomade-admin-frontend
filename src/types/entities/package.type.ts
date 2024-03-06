export interface Package {
  id: string;
  name: string;
  description: string;
  appliedDiscountPercentage: number;
  containedServices: string[];
  price: number;
}
