import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard"

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {animeList.map(anime => {
              return (
                <div className="col-md my-3" key={anime.mal_id}>
                  <MovieCard movie={anime} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
