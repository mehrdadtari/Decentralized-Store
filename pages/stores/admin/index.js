import React, { Component } from "react";
import { Button, Card, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import { Link } from "../../../routes";
import web3 from "../../../ethereum/web3";
import Store from "../../../ethereum/store";
import AdminRow from "../../../components/AdminRow";

class ProductAdmin extends Component {
  state = {
    errorMessage: "",
    loadingAddManager: false,
    loadingRemoveManager: false,
    loadingStoreName: false,
    loading: false,
    managerAddress: "",
    storeNewName: "",
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    const store = Store(address);

    const summary = await store.methods.getStoreSummary().call();

    return {
      address,
      commoditiesCount: summary[0],
      bestSeller: summary[1],
      bestSellerQuantity: summary[2],
      storeName: summary[3],
      storeScore: summary[4],
      numStoreReviews: summary[5],
    };
  }

  onAddManager = async (event) => {
    event.preventDefault();

    this.setState({ loadingAddManager: true, errorMessage: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods.addManager(this.state.managerAddress).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loadingAddManager: false });
    this.setState({ managerAddress: "" });
    Router.pushRoute(`/stores/${this.props.address}/nimda`);
  };

  onRemoveManager = async (event) => {
    event.preventDefault();

    this.setState({ loadingRemoveManager: true, errorMessage: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods.deleteManager(this.state.managerAddress).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loadingRemoveManager: false });
    this.setState({ managerAddress: "" });
    Router.pushRoute(`/stores/${this.props.address}/nimda`);
  };

  onNameChange = async (event) => {
    event.preventDefault();

    this.setState({ loadingStoreName: true, errorMessage: "" });

    try {
      const store = Store(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await store.methods.changeStoreName(this.state.storeNewName).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loadingStoreName: false });
    this.setState({ storeNewName: "" });
    Router.pushRoute(`/stores/${this.props.address}/nimda`);
  };

  renderCards() {
    const {
      commoditiesCount,
      bestSeller,
      bestSellerQuantity,
      storeName,
      storeScore,
      numStoreReviews,
    } = this.props;

    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{storeName}</Card.Header>
            <Card.Meta>Store Name</Card.Meta>
            <Card.Description>
              This store offers {commoditiesCount} products.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content style={{ overflowWrap: "break-word" }}>
            <Card.Header>{this.props.address}</Card.Header>
            <Card.Meta>Store Address</Card.Meta>
            <Card.Description>
              The authorized managers can create new products.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>{bestSeller}</Card.Header>
            <Card.Meta>Best Seller Product</Card.Meta>
            <Card.Description>
              This store has sold {<b>{bestSellerQuantity}</b>} {bestSeller}s.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>{`${storeScore} / 5`}</Card.Header>
            <Card.Meta>Store Rating</Card.Meta>
            <Card.Description>
              This rating is calculated from {<b>{numStoreReviews}</b>} reviews.
              Click the button to see all the reviews.
              <Link route={`/stores/${this.props.address}/reviews`}>
                <a>
                  <Button basic color="teal" style={{ marginTop: 15 }}>
                    Reviews!
                  </Button>
                </a>
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Add New Manager</Card.Header>
            <Card.Meta>Accessible by existing managers.</Card.Meta>
            <Card.Description>
              <Form
                size="mini"
                onSubmit={this.onAddManager}
                error={!!this.state.errorMessage}
              >
                <Form.Field>
                  <Input
                    placeholder="New Manager Address ..."
                    value={this.state.managerAddress}
                    onChange={(event) =>
                      this.setState({ managerAddress: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loadingAddManager}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Remove a Manager</Card.Header>
            <Card.Meta>Accessible by existing managers.</Card.Meta>
            <Card.Description>
              <Form
                size="mini"
                onSubmit={this.onRemoveManager}
                error={!!this.state.errorMessage}
              >
                <Form.Field>
                  <Input
                    placeholder="Manager Address to be Removed ..."
                    value={this.state.managerAddress}
                    onChange={(event) =>
                      this.setState({ managerAddress: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loadingRemoveManager}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Change Store Name</Card.Header>
            <Card.Meta>Accessible by existing managers.</Card.Meta>
            <Card.Description>
              <Form
                size="mini"
                onSubmit={this.onNameChange}
                error={!!this.state.errorMessage}
              >
                <Form.Field>
                  <Input
                    placeholder="Enter New Name ..."
                    value={this.state.storeNewName}
                    onChange={(event) =>
                      this.setState({ storeNewName: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loadingStoreName}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Update Products</Card.Header>
            <Card.Meta>See and Update Exisitng Products</Card.Meta>
            <Card.Description>
              Click the Following button to be redirected to the product
              management console.
              <Link route={`/stores/${this.props.address}/nimda/products`}>
                <a>
                  <Button basic color="teal" style={{ marginTop: 15 }}>
                    Redirect!
                  </Button>
                </a>
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>New Product</Card.Header>
            <Card.Meta>Add a new product</Card.Meta>
            <Card.Description>
              Click the Following button to be redirected to new product
              management console.
              <Link route={`/stores/${this.props.address}/nimda/products/new`}>
                <a>
                  <Button basic color="teal" style={{ marginTop: 15 }}>
                    Redirect!
                  </Button>
                </a>
              </Link>
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
            Store Management Console --{" "}
            {<span style={{ color: "cadetblue" }}>{this.props.storeName}</span>}
            :
          </h3>
        </div>
        <div>{this.renderCards()}</div>
      </Layout>
    );
  }
}

export default ProductAdmin;
