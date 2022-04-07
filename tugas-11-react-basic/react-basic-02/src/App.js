import { Component } from "react";
import MovieCard from "./MovieCard"



class App extends Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      isLoading: false
    }
  }

  fetchMovieList() {
    fetch("https://api.jikan.moe/v3/top/anime")
    .then(response => response.json())
    .then(result => {
      this.setState({movieList:result.top})
    })
    .catch(error => error)
  }

  componentDidMount() {
    this.fetchMovieList();
  }

  componentDidUpdate() {
    if(this.state.movieList.length != 0 && !this.state.isLoading) {
      this.setState({isLoading: true})
    }
  }

  render() {
    if(this.state.isLoading) {
      return (
          <div className="container my-5">
          <h1 className="text-center">Anime List</h1>
          <div className="container my-5">
            <div id="daftar-anime" className="row">
              {this.state.movieList.map(anime => {
                return (
                  <div className="col-md my-3" key={anime.mal_id}>
                    <MovieCard movie={anime} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    } else {
      return <h2>Loading ...</h2>
    }
  }
}

export default App;
