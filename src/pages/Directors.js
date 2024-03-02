import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

function Directors() {
  const [directorElements, setDirectorElements] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then((res) => res.json())
      .then((directorList) => renderDirectorElements(directorList));
  });

  function renderDirectorElements(directors) {
    setDirectorElements(
      directors.map((director) => {
        return (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => {
                return <li key={index}>{movie}</li>;
              })}
            </ul>
          </article>
        );
      })
    );
  }
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorElements}
      </main>
    </>
  );
}

export default Directors;
