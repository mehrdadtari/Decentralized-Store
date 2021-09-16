import React, { Component } from "react";
import Layout from "../../../components/Layout";
import Store from "../../../ethereum/store";
import {
  Button,
  Card,
  Form,
  Grid,
  Message,
  Rating,
  TextArea,
  Container,
  Header,
} from "semantic-ui-react";
import web3 from "../../../ethereum/web3";

class ProductReviews extends React.Component {
  static async getInitialProps(props) {
    const { address, product_id } = props.query;
    const store = Store(address);
    const product = await store.methods.products(product_id).call();
    const productReviews = await store.methods
      .getProductsReviews(product_id)
      .call();
    /*
        summary which is the output of getSumary function from the campaign smart contract is actually 
        an object. The keys of these object are numbers starting from 0. So, we can access the outputs of
        getSummary function of the smart contract with summary[0], summary[1] and so on.
    */
    return {
      address,
      product,
      writtenReviews: productReviews[0],
      reviewersAddress: productReviews[1],
      ratings: productReviews[2],
    };
  }

  renderCards() {
    const { writtenReviews, reviewersAddress, ratings } = this.props;
    const items = reviewersAddress.map((customerAddress, index) => {
      return (
        <Card fluid key={index}>
          <Card.Content>
            <Card.Header>
              <Container textAlign="left">{customerAddress}</Container>
              <Header floated="right">
                <Rating
                  size="huge"
                  icon="star"
                  defaultRating={ratings[index]}
                  maxRating={5}
                  disabled
                />
              </Header>
            </Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>Customer Address</Card.Meta>
            <Card.Description>{writtenReviews[index]}</Card.Description>
          </Card.Content>
        </Card>
      );
    });

    return <Card.Group>{items}</Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3 style={{ marginBottom: 15, color: "DarkCyan" }}>
            {this.props.product.description} Reviews:
          </h3>
        </div>
        <div style={{ marginTop: 20 }}>{this.renderCards()}</div>
      </Layout>
    );
  }
}

export default ProductReviews;
