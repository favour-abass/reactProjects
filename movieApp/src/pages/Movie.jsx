import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://streaming-availability.p.rapidapi.com/shows/tv/1?series_granularity=episode&output_language=en&country=US";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e783262941msha79bfdd8efd7815p1cb761jsnbf5ed46e214a",
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result);
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
    <section className="mt-20 p-8">
      <h1 className="text-3xl font-bold text-center">Movies</h1>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        {/* Poster */}
        <img
          className="w-full h-64 object-cover"
          src={
            movies.imageSet?.verticalPoster?.w240 ||
            "https://via.placeholder.com/240x360"
          }
          alt={movies.title}
        />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{movies.title}</h2>
          <p className="text-gray-600 text-sm mb-2">
            {movies.firstAirYear} • {movies.episodeCount} episodes
          </p>
          <p className="text-gray-500 text-sm mb-4 line-clamp-3">
            {movies.overview || "No description available."}
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
      {/* {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))} */}
    </section>
  );
};

export default Movie;
