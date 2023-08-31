import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [Movies, setMovies] = useState([]);
  const [tv, settv] = useState([]);
  const [person, setperson] = useState([]);

  async function getmovies(medi, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${medi}/week?api_key=375426995ce7faa06248f3056de96e2b`
    );
    callback(data.results.slice(0, 10));
  }
  useEffect(() => {
    getmovies("movie", setMovies);
    getmovies("tv", settv);
    getmovies("person", setperson);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brder mb-4 w-25"></div>
            <h2 className="h5">
              {" "}
              Trending <br /> Movies <br /> to Watched{" "}
            </h2>

            <p className="text-muted">TO Trending Movies</p>

            <div className="brder mt-4"></div>
          </div>
        </div>
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

      <div className="row my-4">
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

      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brder mb-4 w-25"></div>
            <h2 className="h5">
              {" "}
              Trending <br /> Person <br /> to Watched{" "}
            </h2>

            <p className="text-muted">TO Trending Person</p>

            <div className="brder mt-4"></div>
          </div>
        </div>
        {person.map((person, i) => (
          <div key={i} className="col-md-2">
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/w500` + person.profile_path}
              alt=""
            />

            <h2 className="h6 my-3">{person.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
