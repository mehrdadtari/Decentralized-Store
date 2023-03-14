import React, { Component } from "react";
import Layout from "../../../../components/Layout";
import Store from "../../../../ethereum/store";
import { Button, Card, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../../../ethereum/web3";
import { Router } from "../../../../routes";

class ProductUpdate extends Component {
  state = {
    errorMessageInventory: "",
    errorMessageName: "",
    errorMessageSeller: "",
    errorMessagePrice: "",
    errorMessageAvailablity: "",
    loadingUpdateInventory: false,
    loadingUpdateName: false,
    loadingUpdateSeller: false,
    loadingUpdatePrice: false,
    loadingPositive: false,
    loadingNegative: false,
    updateInventory: "",
    updateName: "",
    updateSeller: "",
    updatePrice: "",
  };

  static async getInitialProps(props) {
    const { address, product_id } = props.query;
    const store = Store(address);
    const product = await store.methods.products(product_id).call();

    return {
      address,
      product_id,
      product,
    };
  }

  onInventoryChange = async (event) => {
    event.preventDefault();

    this.setState({ loadingUpdateInventory: true, errorMessageInventory: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods
        .updateInventory(this.props.product_id, this.state.updateInventory)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessageInventory: err.message });
    }
    this.setState({ loadingUpdateInventory: false });
    this.setState({ updateInventory: "" });
    Router.pushRoute(`/stores/${this.props.address}/nimda/products`);
  };

  onNameChange = async (event) => {
    event.preventDefault();

    this.setState({ loadingUpdateName: true, errorMessageName: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods
        .updateProductName(this.props.product_id, this.state.updateName)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessageName: err.message });
    }
    this.setState({ loadingUpdateName: false });
    this.setState({ updateName: "" });
    Router.pushRoute(`/stores/${this.props.address}/nimda/products`);
  };

  onSellerChange = async (event) => {
    event.preventDefault();

    this.setState({ loadingUpdateSeller: true, errorMessageSeller: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods
        .updateProductSeller(this.props.product_id, this.state.updateSeller)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessageSeller: err.message });
    }
    this.setState({ loadingUpdateSeller: false });
    this.setState({ updateSeller: "" });
    Router.pushRoute(`/stores/${this.props.address}/nimda/products`);
  };

  onPriceChange = async (event) => {
    event.preventDefault();

    this.setState({ loadingUpdatePrice: true, errorMessagePrice: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods
        .updateProductPrice(
          this.props.product_id,
          web3.utils.toWei(this.state.updatePrice, "ether")
        )
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessagePrice: err.message });
    }
    this.setState({ loadingUpdatePrice: false });
    this.setState({ updatePrice: "" });
    Router.pushRoute(`/stores/${this.props.address}/nimda/products`);
  };

  onClickPositive = async () => {
    this.setState({ loadingPositive: true, errorMessageAvailablity: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods.productAvailable(this.props.product_id, true).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessageAvailablity: err.message });
    }
    this.setState({ loadingPositive: false });
    Router.pushRoute(`/stores/${this.props.address}/nimda/products`);
  };

  onClickNegative = async () => {
    this.setState({ loadingNegative: true, errorMessageAvailablity: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods.productAvailable(this.props.product_id, false).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessageAvailablity: err.message });
    }
    this.setState({ loadingNegative: false });
    Router.pushRoute(`/stores/${this.props.address}/nimda/products`);
  };

  renderCards() {
    const { description, price, seller, available, availableInventory } =
      this.props.product;

    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Update Product Name:</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Current Name:{" "}
              {
                <span style={{ color: "DimGrey", fontWeight: "bold" }}>
                  {description}
                </span>
              }
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onNameChange}
                error={!!this.state.errorMessageName}
              >
                <Form.Field>
                  <Input
                    placeholder="Enter New Name ..."
                    value={this.state.updateName}
                    onChange={(event) =>
                      this.setState({ updateName: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessageName}
                />
                <Button primary loading={this.state.loadingUpdateName}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content style={{ overflowWrap: "break-word" }}>
            <Card.Header>Update Seller Address:</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Current Seller Address:{" "}
              {
                <span style={{ color: "DimGrey", fontWeight: "bold" }}>
                  {seller}
                </span>
              }
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onSellerChange}
                error={!!this.state.errorMessageSeller}
              >
                <Form.Field>
                  <Input
                    placeholder="Enter New Seller Address ..."
                    value={this.state.updateSeller}
                    onChange={(event) =>
                      this.setState({ updateSeller: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessageSeller}
                />
                <Button primary loading={this.state.loadingUpdateSeller}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Update Product's Price:</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Current Price:{" "}
              {
                <span style={{ color: "DimGrey", fontWeight: "bold" }}>
                  {web3.utils.fromWei(price, "ether")} ETH{" "}
                </span>
              }
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onPriceChange}
                error={!!this.state.errorMessagePrice}
              >
                <Form.Field>
                  <Input
                    placeholder="Enter New Price ..."
                    value={this.state.updatePrice}
                    onChange={(event) =>
                      this.setState({ updatePrice: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessagePrice}
                />
                <Button primary loading={this.state.loadingUpdatePrice}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Update Product's Inventory:</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Current Inventory:{" "}
              {
                <span style={{ color: "DimGrey", fontWeight: "bold" }}>
                  {availableInventory}
                </span>
              }
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onInventoryChange}
                error={!!this.state.errorMessageInventory}
              >
                <Form.Field>
                  <Input
                    placeholder="Enter New Inventory ..."
                    value={this.state.updateInventory}
                    onChange={(event) =>
                      this.setState({ updateInventory: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessageInventory}
                />
                <Button primary loading={this.state.loadingUpdateInventory}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Update Product's Availablity:</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Current State:{" "}
              {
                <span style={{ color: "DimGrey", fontWeight: "bold" }}>
                  {available ? "Yes!" : "No!"}
                </span>
              }
            </Card.Meta>
            <Card.Description style={{ marginTop: 5 }}>
              <Button.Group
                size="small"
                error={!!this.state.errorMessageAvailablity}
              >
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessageAvailablity}
                />
                <Button
                  positive
                  loading={this.state.loadingPositive}
                  onClick={this.onClickPositive}
                >
                  Yes
                </Button>
                <Button.Or />
                <Button
                  negative
                  loading={this.state.loadingNegative}
                  onClick={this.onClickNegative}
                >
                  No
                </Button>
              </Button.Group>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }

  render() {
    return (
      <Layout>
        <div>
          <h3 style={{ marginBottom: 15, color: "DarkCyan" }}>
            Product Management Console --{" "}
            {
              <span style={{ color: "cadetblue" }}>
                {this.props.product.description}
              </span>
            }
            :
          </h3>
        </div>
        <div>{this.renderCards()}</div>
      </Layout>
    );
  }
}

export default ProductUpdate;
