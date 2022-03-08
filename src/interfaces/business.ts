export interface Business {
  id: string;
  title: string;
  cover: string;
  address?: string;
  openAt?: string;
  closeAt?: string;
  rate: number;
  reviewsCount: number;
  phone: string;
  homePage: string;
}
