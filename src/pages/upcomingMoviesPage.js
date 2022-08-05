import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = (props) => {
  const toDo = () => true;
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("favorites")); 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      selectFavorite={toDo}
    />
  );
};

export default UpcomingMoviesPage;