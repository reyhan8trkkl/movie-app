import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Button, Form, Image, Message } from "semantic-ui-react";

export default class MovieForm extends Component {
  state = {
    title: this.props.movie ? this.props.movie.title :  "",
    cover: this.props.movie ? this.props.movie.cover :  "",
    errors: "",
    done: false,
    id:this.props.id ? this.props.id : null
  };
 
  render() {
    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const onSubmitFormData = () => {
      const errors = validate();
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.props.newMovies(this.state);
        this.setState({done:true})
      }
    };
    const validate = () => {
      const errMessage = {};
      if (!this.state.title) {
        errMessage.title = "Can't be blank";
      }
      if (!this.state.cover) {
        errMessage.cover = "Can't be blank";
      }
      return errMessage;
    };

    return (
      <Form
        onSubmit={onSubmitFormData}
        loading={this.props.newMovieReducer.fetching}
      >
        {this.props.newMovieReducer.fetched && this.state.done ? <Navigate to="/movies" /> : null}

        {!this.props.newMovieReducer.error.message ? (
          ""
        ) : (
          <Form.Field>
            <Message negative>
              <Message.Header>Error from post API</Message.Header>
              <p>{this.props.newMovieReducer.error.message}</p>
            </Message>
          </Form.Field>
        )}

        {!this.state.errors.title && !this.state.errors.cover ? (
          ""
        ) : (
          <Form.Field>
            <Message negative>
              <Message.Header>
                We're sorry we can't apply that discount
              </Message.Header>
              <p>Can't be blank</p>
            </Message>
          </Form.Field>
        )}

        <Form.Field error={!this.state.title}>
          <label>Title</label>
          <input
            name="title"
            placeholder="Title..."
            value={this.state.title}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field error={!this.state.cover}>
          <label>Cover Url</label>
          <input
            name="cover"
            placeholder="URL..."
            value={this.state.cover}
            onChange={handleChange}
          />
        </Form.Field>
        <Button color="teal" type="submit">
          ADD
        </Button>
        <Form.Field>
          <Image src={this.state.cover} size="small" />
        </Form.Field>
      </Form>
    );
  }
}
