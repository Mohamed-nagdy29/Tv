import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Movies = () => {
  const [Movies, setMovies] = useState([]);

  let nums = new Array(20).fill(1).map((ele, index) => index + 1);

  async function getmovies(pageN) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=375426995ce7faa06248f3056de96e2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageN}`
    );
    setMovies(data.results);
  }
  useEffect(() => {
    getmovies(1);
  }, []);

  return (
    <>
      <div className="row d-flex justify-content-center">
        {Movies.map((moive, i) => (
          <div key={i} className="col-md-2">
            <Link to={`/moviedetils/${moive.id}`}>
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500` + moive.poster_path}
                alt=""
              />

              <h2 className="h6 my-2">{moive.title}</h2>
            </Link>
          </div>
        ))}
      </div>

      <nav aria-label="..." className="py-4">
        <ul class="pagination ul-s pagination-lg d-flex justify-content-center">
          {nums.map((num) => (
            <li
              onClick={() => getmovies(num)}
              className="page-item bg-transparent text-white"
            >
              <a className="page-link"> {num} </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
