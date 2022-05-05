import React, { Component } from "react";
import { fixedMenuStyle, menuStyle } from "../../helpers/styleHelpers";
import { Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  render() {
    const { menuFixed } = this.state;
    return (
      <Menu
        borderless
        fixed={menuFixed ? "top" : undefined}
        style={menuFixed ? fixedMenuStyle : menuStyle}
      >
        <Container text>
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item header>Movie App</Menu.Item>
          <Menu.Item as={Link} to="/">
            Home Page
          </Menu.Item>
          <Menu.Item as={Link} to="movies">
            Movies
          </Menu.Item>
          <Menu.Item as={Link} to="movies/new">
            Add Movie
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
