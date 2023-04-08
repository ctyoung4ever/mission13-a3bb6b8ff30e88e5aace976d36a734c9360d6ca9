import { useState } from 'react';
import data from './MovieDataSample.json';
const mds = data.MovieDataSample;

function MovieList() {
  const [listMovies, setListMovies] = useState(mds);

  const addMovie = () => {
    setListMovies([
      ...mds,
      {
        Category: 'Comedy',
        Title: 'Wedding Planner, The',
        Year: 1988,
        Director: 'Adam Shankman',
        Rating: 'PG-14',
      },
    ]);
  };
  return (
    <>
      <div>
        <h3>Joel Jilton Movies</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Catrgory</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {listMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={addMovie}>
          Add movie
        </button>
      </div>
    </>
  );
}
export default MovieList;
