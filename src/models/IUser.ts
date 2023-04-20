export interface IoldUser {
  sno: number;
  name: string;
  age: number;
}

export interface IHotel {
  hotel_id: number;
  site: string;
  distance: string;
  date: string;
  price: string;
  rating: string;
  hotelImages: string[];
}
export interface ILike {
  user_id: number;
  hotel_id: number;
}

export interface IUser {
  user_id: number;
  name: string;
}
