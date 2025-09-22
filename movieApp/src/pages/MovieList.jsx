import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e783262941msha79bfdd8efd7815p1cb761jsnbf5ed46e214a",
          "x-rapidapi-host": "movie-database-api1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result.data.movies);
        console.log(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="px-10 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400"></div>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mt-20 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
        >
          <img src={movie.background_image} alt={movie.title} />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {movie.date_uploaded} • date 
            </p>
            <p className="text-white text-center bg-red-500 flex items-center rounded-full py-1 px-2 text-sm mb-2">
              {movie.genres}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MovieList;
