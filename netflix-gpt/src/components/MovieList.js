import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) =>{
   // console.log(movies);
   if(movies === null) return;
    return(
    <div className="px-6">
        <h1 className="text-lg p-2 md:text-3xl  py-4 font-bold text-white">{title}</h1>
    <div className="flex overflow-x-scroll ">
        <div className="flex"> 
        {/* {movies.map(movie=><MovieCard  key={movie.id} movieName={movie.title} posterPath={movie.poster_path} movieId={movie.id}/>)} */}
        {movies.map(movie=><MovieCard  key={movie.id} movieName={movie.title} posterPath={movie.poster_path} moviedata={movie}/>)}
        </div>
    </div>
    </div>
    )
}

export default MovieList;