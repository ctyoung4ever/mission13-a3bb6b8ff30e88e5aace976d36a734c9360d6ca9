import { useState } from 'react';
import { Movie } from '../types/movies';

function Movielist1() {
  const [Movie1Data, setMovie1Data] = useState<Movie[]>([]);
  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:4000/movie');
    const temp = await rsp.json();
    setMovie1Data(temp);
  };
  fetchMovie();
  return (
    <>
      <div className="row">
        <h4>Movie list from api</h4>

        <table className="table">
          <tr>
            <th>title</th>
            <th>Year</th>
            <th>Director</th>
            <th>rating</th>
            <th>Edited</th>
            <th>Lent to</th>
            <th>Notes</th>
          </tr>
          <tbody>
            {Movie1Data.map((m) => (
              <tr key={m.movieID}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Movielist1;
