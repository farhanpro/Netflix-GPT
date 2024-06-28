import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTrendingMovies, addUpcommingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const nowplayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2',API_OPTIONS);
        const json =  await data.json();
       // console.log(json.results);
         dispatch( addNowPlayingMovies(json.results))
    }

    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    const getTrendingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

    const getUpcommingMovies = async () =>{
        const data = await fetch ('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcommingMovies(json.results));
    }

    useEffect( ()=>{  if(!nowplayingMovies)getUpcommingMovies();getNowPlayingMovies();getPopularMovies();getTrendingMovies()},[])
}

export default useNowPlayingMovies;