// import UserList from "./components/old/UserList";
// import AuthUser from "./components/old/AuthUser";
// // import Login from "./components/old/Login";
// import Counter from "./components/old/Counter";
// import Youtube from "./components/old/Youtube";
// import ClassComp from "./components/old/ClassComp";
// import FunComp from "./components/old/FunComp";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Hotel from "./pages/hotel";
import Search from "./components/search";

function App() {
  return (
    <div>
      {/* <ClassComp name="Techinfoyt" age={26} />
      <FunComp name="Techinfoyt" age={26} />
      <Youtube />
      <Login />
      <UserList /> */}
      {/* <AuthUser /> */}
      {/* <Counter /> */}
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotel/:hotel_id/" element={<Hotel />} />
      </Routes>
    </div>
  );
}

export default App;
