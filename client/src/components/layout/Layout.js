import React from "react";

// Components
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Counter } from "../counter/Counter";
import { Form } from "../form/Form";

export class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Header />
          {/* <Counter initState={20} /> */}
          {/* <Counter initState={10} /> */}
          {/* <Counter initState={5} /> */}
          <Form />
        </Container>
      </React.Fragment>
    );
  }
}
