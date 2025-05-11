export type Provider = {
  id: string;
  name: string;
  service: string;
  rating: number;
  reviewCount: number;
  location: string;
  price: number;
  photo: string;
  bio?: string;
  availability?: string[];
  prices?: {
    hourly?: number;
    daily?: number;
    callout?: number; 
  };
  reviews?: Array<{
    user: string;
    rating: number;
    comment: string;
    date: string;
  }>;
};

export type Booking = {
  id: string;
  providerId: string;
  userId: string;
  date: string;
  time: string;
  address: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentMethod: 'orange_money' | 'cash';
  amount: number;
  createdAt: string;
};