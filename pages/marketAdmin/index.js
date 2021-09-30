import React, { Component } from "react";
import factory from "../../ethereum/factory";
import { Button, Card, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import Store from "../../ethereum/store";
import web3 from "../../ethereum/web3";

class Market extends Component {
  state = {
    errorMessage: "",
    loadingAddAdmin: false,
    loadingRemoveAdmin: false,
    loadingDepositAccount: false,
    loadingFee: false,
    loading: false,
    adminAddressAdd: "",
    depositAddress: "",
    newFee: "",
  };

  static async getInitialProps() {
    const summary = await factory.methods.getAdminSummary().call();

    return {
      owner: summary[0],
      depositAddress: summary[1],
      membershipFee: summary[2],
    };
  }

  onAddAdmin = async (event) => {
    event.preventDefault();

    this.setState({ loadingAddAdmin: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.addAdmin(this.state.adminAddressAdd).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loadingAddAdmin: false });
    this.setState({ adminAddressAdd: "" });
    Router.pushRoute(`/nimda`);
  };

  onRemoveAdmin = async (event) => {
    event.preventDefault();

    this.setState({ loadingRemoveAdmin: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.deleteAdmin(this.state.adminAddress).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loadingRemoveAdmin: false });
    this.setState({ adminAddress: "" });
    Router.pushRoute(`/nimda`);
  };

  onFeeChange = async (event) => {
    event.preventDefault();

    this.setState({ loadingFee: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .changeFee(web3.utils.toWei(this.state.newFee, "ether"))
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loadingFee: false });
    this.setState({ newFee: "" });
    Router.pushRoute(`/nimda`);
  };

  onDepositAccountChange = async (event) => {
    event.preventDefault();

    this.setState({ loadingDepositAccount: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.feeDepositAccount(this.state.depositAddress).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loadingDepositAccount: false });
    this.setState({ depositAddress: "" });
    Router.pushRoute(`/nimda`);
  };

  renderCards() {
    const { owner, depositAddress, membershipFee } = this.props;

    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Add New Admin</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Accessible by existing administrators.
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onAddAdmin}
                error={!!this.state.errorMessage}
              >
                <Form.Field>
                  <Input
                    placeholder="New Admin Address ..."
                    value={this.state.adminAddressAdd}
                    onChange={(event) =>
                      this.setState({ adminAddressAdd: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loadingAddAdmin}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Remove an Admin</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Accessible by existing administrators.
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onRemoveAdmin}
                error={!!this.state.errorMessage}
              >
                <Form.Field>
                  <Input
                    placeholder="Admin Address to be Removed ..."
                    value={this.state.adminAddress}
                    onChange={(event) =>
                      this.setState({ adminAddress: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loadingRemoveAdmin}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Change Membership Fee</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Current Fee:{" "}
              {
                <span style={{ color: "DimGrey", fontWeight: "bold" }}>
                  {web3.utils.fromWei(membershipFee, "ether")} MATIC
                </span>
              }
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onFeeChange}
                error={!!this.state.errorMessage}
              >
                <Form.Field>
                  <Input
                    placeholder="Enter New Fee ..."
                    value={this.state.newFee}
                    onChange={(event) =>
                      this.setState({ newFee: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loadingFee}>
                  Submit!
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content style={{ overflowWrap: "break-word" }}>
            <Card.Header>Change the Deposit Address:</Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>
              Current Deposit Address:{" "}
              {
                <span style={{ color: "DimGrey", fontWeight: "bold" }}>
                  {depositAddress}
                </span>
              }
            </Card.Meta>
            <Card.Description style={{ marginTop: 15 }}>
              <Form
                size="mini"
                onSubmit={this.onDepositAccountChange}
                error={!!this.state.errorMessage}
              >
                <Form.Field>
                  <Input
                    placeholder="New Deposit Address ..."
                    value={this.state.depositAddress}
                    onChange={(event) =>
                      this.setState({ depositAddress: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loadingDepositAccount}>
                  Submit!
                </Button>
              </Form>
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
            Market Management Console:
          </h3>
        </div>
        <div>{this.renderCards()}</div>
      </Layout>
    );
  }
}
export default Market;
