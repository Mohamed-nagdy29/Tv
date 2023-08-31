import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const People = () => {

  const [person, setperson] = useState([]);

  async function getmovies(medi, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${medi}/week?api_key=375426995ce7faa06248f3056de96e2b`
    );
    callback(data.results);
  }
  
  useEffect(() => {
    getmovies("person", setperson);
  }, []);
  return (
    <div>
            <div className="row d-flex justify-content-center mb-4">
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
      
      </div>
  )
}
