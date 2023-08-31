import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Tv = () => {
  const [tv, settv] = useState([]);
  let nums = new Array(20).fill(1).map((ele, index) => index + 1);

  async function getmovies(pageN) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=375426995ce7faa06248f3056de96e2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageN}`
    );
    settv(data.results);
  }
  useEffect(() => {
    getmovies("tv", settv);
  }, []);

  return (
    <>
      <div className="row my-4 d-flex justify-content-center mb-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brder mb-4 w-25"></div>
            <h2 className="h5">
              {" "}
              Trending <br /> Tv <br /> to Watched{" "}
            </h2>

            <p className="text-muted">TO Trending Tv</p>

            <div className="brder mt-4"></div>
          </div>
        </div>
        {tv.map((tv, i) => (
          <div key={i} className="col-md-2">
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/w500` + tv.poster_path}
              alt=""
            />

            <h2 className="h6 my-3">{tv.name}</h2>
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
