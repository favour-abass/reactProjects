import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("all");
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(70232 / 20); // 70232 movies with 20 movies per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=${page}&quality=all&genre=${genre}&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false`;
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
  }, [genre, page]);

  const onPrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const onNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  if (loading) {
    return (
      <div className="px-10 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400"></div>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mt-20">
      <div className="flex justify-center items-center">
        <span className="me-5">Genres:</span>
        <select
          className="border-2 border-blue-500 rounded-md p-2 "
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>
      </div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              src={movie.medium_cover_image || movie.large_cover_image}
              alt={movie.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-gray-600 text-sm mb-2">
                {movie.date_uploaded} • date
              </p>
              <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                {movie.genres?.map((g, index) => (
                  <p
                    key={index}
                    className="text-white text-center bg-red-500 rounded-full py-1 px-2 text-xs"
                  >
                    {g}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 my-6">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md border 
            ${
              page === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-blue-600 border-blue-400 hover:bg-blue-100"
            }`}
        >
          <FaArrowLeft />
        </button>

        {/* Current Page Indicator */}
        <span className="text-gray-700 font-medium">
          {page} / {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-md border 
            ${
              page === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-blue-600 border-blue-400 hover:bg-blue-100"
            }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default MovieList;
