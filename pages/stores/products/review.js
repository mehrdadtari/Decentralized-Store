import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Form, Message, Button, Rating, TextArea } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Store from "../../../ethereum/store";
import { Router } from "../../../routes";

class storeratings extends Component {
  state = {
    rating: 0,
    review: "",
    errorMessage: "",
    loading: false,
  };

  static async getInitialProps(props) {
    const { address, product_id } = props.query;
    const store = Store(address);
    let product = await store.methods.products(product_id).call();

    return { address, product_id, product };
  }

  onRate = (e, { rating, maxRating }) => {
    this.setState({ rating, maxRating });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const store = await Store(this.props.address);
      await store.methods
        .reviewProduct(
          this.props.product_id,
          this.state.rating,
          this.state.review
        )
        .send({
          from: accounts[0],
          //When we use Metamask, we don't need to define "gas". Metamask do it automatically.
        });

      //Above code redirects user to the root directory (index.js)
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
    this.setState({ review: "" });
    Router.pushRoute(`/stores/${this.props.address}/products`);
  };

  render() {
    return (
      <Layout>
        <h3>Create a Rating</h3>
        <Form
          size="huge"
          onSubmit={this.onSubmit}
          error={!!this.state.errorMessage}
        >
          <Form.Field>
            <label style={{ marginBottom: 15, color: "DarkCyan" }}>
              {this.props.product.description}
            </label>
            <Rating
              style={{ marginBottom: 15 }}
              size="massive"
              icon="star"
              maxRating={5}
              onRate={this.onRate}
            />
            <TextArea
              placeholder="Write a Review..."
              value={this.state.review}
              onChange={(event) =>
                this.setState({ review: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Submit!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default storeratings;
