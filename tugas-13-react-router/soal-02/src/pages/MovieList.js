import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";
import { useLocation } from "react-router-dom";
import QueryString from "qs";

import movies from "../dummy-data";

const MovieList = () => {
  const location = useLocation();

  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const params = QueryString.parse(location.search.substring(1));

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: params.show || shows[0],
    category: params.category || categories[0],
    sort: params.sort || fields[0],
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies = movies
    .filter((movie) => {
      return movie.type == filter.category;
    })
    .slice(0,filter.show)
    .sort((a, b) => {
      if (filter.sort == "score") {
        return b.score - a.score;
      } else if (filter.sort == "title" && a.title < b.title) {
        return -1;
      }
    });

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
