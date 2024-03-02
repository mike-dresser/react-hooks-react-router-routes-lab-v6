import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

function Movie() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const { title, time, genres } = movieDetails;
  function genreList() {
    if (genres) {
      return (
        <ul>
          {genres.map((genre, index) => {
            return <li key={index}>{genre + ' '}</li>;
          })}
        </ul>
      );
    }
  }

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
      .then((res) => res.json())
      .then((movieData) => {
        setMovieDetails(movieData);
      });
  }, []);
  return movieDetails ? (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>Length: {time} min</p>
        {genreList()}
      </main>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Movie;
