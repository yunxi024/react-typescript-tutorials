import React, { useEffect, useState } from "react";
import Roomdiv from "../components/roomdiv";
// import axios from "axios";
import { IHotel, ILike } from "./../models/IUser";
import { getHotellist, getuserlike } from "../services/UserService";
import { AuthService } from "../services/UserService";
import Search from "../components/search";

const Home: React.FC = () => {
  const [user, setUser] = useState(AuthService.getCurrentUser());
  const [hotellist, setHotellist] = useState<[] | IHotel[]>([]);
  const [userlike, setuserlike] = useState<[] | ILike[]>([]);

  useEffect(() => {
    (async () => {
      const hotellist = await getHotellist();
      const userlike = await getuserlike();
      setHotellist(hotellist);
      if (user) {
        setuserlike(userlike);
      }
    })();
  }, [user]);

  const likelist = hotellist.map((hotel) =>
    userlike.some(
      (like) =>
        like.hotel_id === hotel.hotel_id && like.user_id === user.user_id
    )
  );

  // console.log(likelist);
  // console.log(userlike);
  // console.log(user);

  return (
    <div>
      <div className="main">
        {hotellist.map((value, i) => (
          <Roomdiv key={i} hotel={value} like={likelist[i]}></Roomdiv>
        ))}
      </div>
    </div>
  );
};

export default Home;
