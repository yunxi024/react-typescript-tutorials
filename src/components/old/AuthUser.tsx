import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IUser } from "../../models/IUser";
import { AuthService, login } from "../../services/UserService";

const AuthUser: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(AuthService.getCurrentUser());
  const navigate = useNavigate();

  //login function
  const handleLogin = async () => {
    login().then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data[0]));
      setUser(response.data[0]);
      setTimeout(() => navigate("/"), 1000);
    });
    // setUser(AuthService.getCurrentUser());
  };

  //logout function
  const handleLogout = (): void => {
    setUser(null);
    localStorage.removeItem("user");
    setTimeout(() => navigate("/"), 1000);
  };
  // console.log(user);
  return (
    <>
      <div className="container">
        <div className="row card p-4 mt-4">
          <div className="col-md-10">
            {user && user ? (
              <div>
                <h1>Welcome User {user.name} </h1>
              </div>
            ) : (
              <h1>PLease Login</h1>
            )}
            {user && user ? (
              <button className="btn btn-danger m-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-primary m-2" onClick={handleLogin}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthUser;

// const displayValue = counts.filter((count) => count !== 0).join(",");
// const totalCount = `${counts[0] > 0 ? "大人" + counts[0] + "," : ""}${
//   counts[1] > 0 ? "子ども" + counts[1] + "," : ""
// }${counts[2] > 0 ? "乳幼児" + counts[2] + "," : ""}${
//   counts[3] > 0 ? "ペット" + counts[3] + "," : ""
// }`;
