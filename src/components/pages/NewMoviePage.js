import React, { Component } from "react";
import { connect } from "react-redux";
import { newMovies, getMovie, updateMovies } from "../../actions/movieActions";
import withRouter from "../../helpers/getParams";
import MovieForm from "../MovieForm";

export class NewMoviePage extends Component {

  componentDidMount() {
    const { params, movieReducer, getMovie } = this.props;
    if (movieReducer.movies.length === 0 && params.id) {
      getMovie(params.id);
    }
  }

  render() {
    const { movieReducer, params } = this.props;
    const movieData =
      movieReducer.movies.length === 0
        ? movieReducer.movie
        : movieReducer.movies.find((item) => item.id === params.id);

    return (
      <div>
        <MovieForm
          id={this.props.params.id}
          movie={movieData}
          newMovieReducer={this.props.newMovieReducer}
          newMovies={params.id ? this.props.updateMovies : this.props.newMovies}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  newMovieReducer: state.newMovieReducer,
  movieReducer: state.movieReducer,
});

const mapDispatchToProps = { newMovies, getMovie, updateMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewMoviePage));
