import { IoldUser, IUser, IHotel } from "./../models/IUser";
import axios from "axios";

export class UserService {
  private static users: IoldUser[] = [
    { sno: 1, name: "Techinfoyt", age: 25 },
    { sno: 2, name: "Tushar", age: 28 },
    { sno: 3, name: "noname", age: 21 },
  ];
  public static getAllUsers() {
    return this.users;
  }
}
export async function getHotellist(): Promise<IHotel[]> {
  try {
    const response = await axios.get<IHotel[]>(
      "http://localhost:3001/hotelList"
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getuserlike() {
  try {
    const response = await axios.get("http://localhost:3001/userlike");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function login() {
  return axios.get("http://localhost:3001/login");
}

export class AuthService {
  public login(): Promise<IUser> {
    return axios.get("http://localhost:3001/login");
  }
  logout() {
    localStorage.removeItem("user");
  }
  public static getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || "null");
  }
}
