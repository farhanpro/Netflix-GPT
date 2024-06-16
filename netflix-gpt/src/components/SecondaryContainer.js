import { useSelector } from "react-redux"
import MovieList  from "./MovieList"
const SecondaryContainer =  () => {
  const  movies =  useSelector( (store) =>  store.movies);
  if(movies.nowPlayingMovies === null || movies.trailerVideo === null ) return;
  console.log("Movies are fetched here ",movies);
  return (
    <div className=" bg-black ">
    <div className="-mt-auto pl-7 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcommingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer