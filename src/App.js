import { Fotter } from "./Fotter";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Movies } from "./Movies";
import { People } from "./People";
import { Login } from "./Login";
import { Register } from "./Register";
import { Navbaar } from "./Navbaar";
import { MovieDetils } from "./MovieDetils";
import { Tv } from "./Tv";

function App() {
  let navigate = useNavigate();

  function Logout() {
    navigate("/login");
  }
  return (
    <div>
      <div className="container">
        <Navbaar Logout={Logout} />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="movies" element={<Movies />} />
          <Route path="moviedetils" element={<MovieDetils />}>
            <Route path=":id" element={<MovieDetils />} />
          </Route>
          <Route path="people" element={<People />} />
          <Route path="tv" element={<Tv />} />

          <Route path="register" element={<Register />} />
          <Route
            path="*"
            element={<div className="text-center fw-bold ">Not Found </div>}
          />
        </Routes>
      </div>

      <Fotter />
    </div>
  );
}

export default App;
