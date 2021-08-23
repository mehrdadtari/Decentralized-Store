import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  state = {
    storeName: "",
    errorMessage: "",
    loading: false, //To keep track of the time that web3 is accessing the ethereum network.
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" }); // We update errornessage to clear previous errors

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createStore(this.state.storeName).send({
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
        <h3>Create a Store</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Store Name:</label>
            <Input
              value={this.state.storeName}
              onChange={(event) =>
                this.setState({ storeName: event.target.value })
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
/*
    Instead of normal input tag, we used Input tag from semantic-ui-react to
    insert "wei" inside the input tag.
*/
/*
error={!!this.state.errorMessage} inside form: double exclamation marks convert the variable to boolean based on
truthy or falsy values. Then, if the error value is falsy, no error message is shown.
*/

export default CampaignNew;
