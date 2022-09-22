import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./page/MoviePage";
import MovieDetailsPage from "./page/MovieDetailsPage";

function App() {
  return (
    <Fragment>
      <Routes>
        {/* Muốn cái Main này trang nào cũng có cả */}
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
