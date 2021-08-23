import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Form, Input, Message, Button } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Store from "../../../ethereum/store";

class storeReviews extends Component {
  state = {
    review: 0,
    errorMessage: "",
    loading: false,
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const store = Store(this.props.address);
      await store.methods.reviewProduct(this.state.review).send({
        from: accounts[0],
        //When we use Metamask, we don't need to define "gas". Metamask do it automatically.
      });

      Router.pushRoute("/");
      //Above code redirects user to the root directory (index.js)
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Review</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Product Name:</label>
            <Input
              value={this.state.review}
              onChange={(event) =>
                this.setState({ review: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default storeReviews;
