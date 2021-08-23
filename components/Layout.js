import React, { Component } from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import Head from "next/head";
/*
    Head module creates <Head> tag that puts everything inside it to the header of
    HTML file.
*/

export default (props) => {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};

//Functional components get called with props argument.
