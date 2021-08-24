import React, { Component } from "react";
import Store from "../../../ethereum/store";
import web3 from "../../../ethereum/web3";
import Layout from "../../../components/Layout";
import { Link, Router } from "../../../routes";
import { Button, Form, Input, Message } from "semantic-ui-react";

class ProductNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    errorMessage: "",
    loading: false,
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const store = Store(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await store.methods
        .createProduct(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });

      Router.pushRoute(`/stores/${this.props.address}/products`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Link route={`/stores/${this.props.address}/products`}>
          <a>Back</a>
        </Link>
        <h3>Create a Product</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Product Name:</label>
            <Input
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Price in Ether:</label>
            <Input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Seller Ethereum Address:</label>
            <Input
              value={this.state.recipient}
              onChange={(event) =>
                this.setState({ recipient: event.target.value })
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

export default ProductNew;
