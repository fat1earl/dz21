import React from "react";

// Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./header.scss";
const style = {
  padding: "25px 206px",
};

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenMenuClick = this.handleOpenMenuClick.bind(this);
    this.handleCloseMenuClick = this.handleCloseMenuClick.bind(this);
    this.state = { isOpened: false };
  }

  handleOpenMenuClick() {
    this.setState({ isOpened: true });
  }

  handleCloseMenuClick() {
    this.setState({ isOpened: false });
  }

  render() {
    const isOpened = this.state.isOpened;
    let button;

    if (isOpened) {
      button = <CloseMenuButton onClick={this.handleCloseMenuClick} />;
    } else {
      button = <OpenMenuButton onClick={this.handleOpenMenuClick} />;
    }

    return (
      <header>
        <AppBar position="static">
          <Toolbar>
            {button}

            <Success isOpened={isOpened} />
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

function MenuOpened(props) {
  return (
    <ul>
      <li>
        <a href="#" noopener="true">
          Главная
        </a>
      </li>
      <li>
        <a href="#" noopener="true">
          Услуги
        </a>
      </li>
      <li>
        <a href="#" noopener="true">
          О нас
        </a>
      </li>
      <li>
        <a href="#" noopener="true">
          Контакты
        </a>
      </li>
    </ul>
  );
}

function MenuClosed(props) {
  return "";
}

function Success(props) {
  const isOpened = props.isOpened;
  if (isOpened) {
    return <MenuOpened />;
  }
  return <MenuClosed />;
}

function OpenMenuButton(props) {
  return <button onClick={props.onClick}>MENU</button>;
}

function CloseMenuButton(props) {
  return <button onClick={props.onClick}>X</button>;
}
