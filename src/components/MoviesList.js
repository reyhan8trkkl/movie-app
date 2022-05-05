import React from "react";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";
import {PropagateLoader} from 'react-spinners'

export default function MoviesList({ movieReducer,deleteMovie }) {
  const emptyMessage = <p>There is no movies yet...</p>;
  const moviesList = movieReducer.error.response ? (
    <h4>Error !</h4>
  ) : (
    //movieReducer.movies.map((movie) => { return <MovieCard key={movie.id} movie={movie} />; })
    <Grid>
      <Grid.Row columns={4}>
        {movieReducer.movies.map((movie) => {
          return (
            <Grid.Column key={movie.id} style={{marginBottom:"17px"}}>
              <MovieCard movie={movie} deleteMovie={deleteMovie} />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
  return <div>
    <PropagateLoader loading={movieReducer.fetching} color="gray" />
    {movieReducer.length === 0 ? emptyMessage : moviesList}</div>;
}
