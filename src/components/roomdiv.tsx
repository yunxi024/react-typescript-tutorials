import "../styles/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IHotel, IUser } from "./../models/IUser";
import axios from "axios";

interface IProps {
  hotel: IHotel;
  like: boolean;
}
interface UserLike {
  id: number;
  user_id: number;
  hotel_id: number;
}

const Roomdiv: React.FC<IProps> = ({ hotel, like }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<null | IUser>(null);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    setUser(user);
  }, []);

  const likehotel = () => {
    console.log("like");
    if (user) {
      const data = {
        id: 0,
        user_id: user.user_id,
        hotel_id: hotel.hotel_id,
      };
      // console.log(data);
      axios.post("http://localhost:3001/userlike", data).catch((error) => {
        console.log(error);
      });
      alert("挿入出来ました!");
      window.location.reload();
    } else {
      console.log("please login");
      setTimeout(() => navigate("/login"), 1000);
    }
  };

  const dislikehotel = () => {
    console.log("delete");
    if (user) {
      axios
        .get<UserLike[]>("http://localhost:3001/userlike")
        .then((response) => {
          const data = response.data;
          console.log(data);
          const itemToDelete = data.find(
            (item) =>
              item.user_id === user.user_id && item.hotel_id === hotel.hotel_id
          );
          if (itemToDelete) {
            console.log(itemToDelete.id);
            axios.delete(`http://localhost:3001/userlike/${itemToDelete.id}`);
          } else {
            console.log("Item not found");
          }
        })
        .catch((error) => {
          // handle error
        });
    }
    alert("successfully deleted");
    window.location.reload();
  };
  // console.log(hotel);
  return (
    <Link className="nav-link" to={`/hotel/${hotel.hotel_id}`}>
      <div className="roomdiv">
        <div className="pictures">
          <Swiper
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {hotel.hotelImages &&
              hotel.hotelImages.map((picture, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={picture} alt=""></img>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          {like ? (
            <button className="liked" onClick={() => dislikehotel()}>
              <div className="likeicon">
                <i className="fa-regular fa-heart"></i>
              </div>
            </button>
          ) : (
            <button className="like" onClick={() => likehotel()}>
              <div className="likeicon">
                <i className="fa-regular fa-heart"></i>
              </div>
            </button>
          )}
        </div>
        <div className="roommessage">
          <p className="site">
            {hotel.site}
            <span className="rating">
              <span>★</span> {hotel.rating}
            </span>
          </p>
          <p className="distance">{hotel.distance}</p>
          <p className="date">{hotel.date}</p>
          <p className="price">{hotel.price}/泊</p>
        </div>
      </div>
    </Link>
  );
};

export default Roomdiv;
