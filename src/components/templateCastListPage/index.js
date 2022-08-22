import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CastList from "../castList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function CastListPageTemplate({ casts, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedCasts = casts
    .filter((c) => {
      return c.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((c) => {
      return genreId > 0 ? c.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <CastList action={action} movies={displayedCasts}></CastList>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;

// SAME FOR THE GENRE SEARCH BAR THING