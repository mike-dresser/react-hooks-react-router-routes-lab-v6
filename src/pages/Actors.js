import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

function Actors() {
  const [actorElements, setActorElements] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((res) => res.json())
      .then((actorList) => renderActorElements(actorList));
  }, []);

  function renderActorElements(actors) {
    setActorElements(
      actors.map((actor, index) => {
        return (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => {
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
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>

        {actorElements}
      </main>
    </>
  );
}

export default Actors;
