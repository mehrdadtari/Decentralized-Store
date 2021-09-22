import React, { Component } from "react";
import {
  Button,
  Table,
  Rating,
  Header,
  Form,
  Input,
  Message,
} from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Store from "../ethereum/store";
import { Link } from "../routes";
import { Router } from "../routes";

class AdminRow extends Component {
  state = {
    updateInventory: "",
    errorMessage: "",
    loading: false,
  };

  // onSubmit = async (event) => {
  //   event.preventDefault();

  //   this.setState({ loading: true, errorMessage: "" });

  //   try {
  //     const store = Store(this.props.address);
  //     const accounts = await web3.eth.getAccounts();
  //     await store.methods
  //       .updateInventory(this.props.id, this.state.updateInventory)
  //       .send({
  //         from: accounts[0],
  //       });
  //   } catch (err) {
  //     this.setState({ errorMessage: err.message });
  //   }
  //   this.setState({ loading: false });
  //   this.setState({ updateInventory: "" });
  //   Router.pushRoute(`/stores/${this.props.address}/nimda`);
  // };

  onClickPositive = async () => {
    const store = Store(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await store.methods.productAvailable(this.props.id, true).send({
      from: accounts[0],
    });
  };

  onClickNegative = async () => {
    const store = Store(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await store.methods.productAvailable(this.props.id, false).send({
      from: accounts[0],
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, commodity } = this.props;

    return (
      <Row>
        <Cell textAlign="center">{id}</Cell>
        <Cell>
          <Header as="h4" textAlign="center">
            {commodity.description}
          </Header>
        </Cell>
        <Cell textAlign="center">
          {web3.utils.fromWei(commodity.price, "ether")}
        </Cell>
        <Cell textAlign="center">{commodity.seller}</Cell>
        <Cell textAlign="center" singleLine>
          <Rating
            icon="star"
            defaultRating={commodity.reviewScore}
            maxRating={5}
            disabled
          />{" "}
          <br />
          <Link
            route={`/stores/${this.props.address}/products/${id}/allReviews`}
          >
            <a>
              <Button color="yellow" size="tiny" basic style={{ marginTop: 5 }}>
                See Reviews
              </Button>
            </a>
          </Link>
        </Cell>
        <Cell textAlign="center">{commodity.totalReviews}</Cell>
        <Cell textAlign="center">{commodity.numSoldProduct}</Cell>
        <Cell textAlign="center">{commodity.availableInventory}</Cell>
        <Cell textAlign="center" singleLine>
          Current State: {commodity.available ? "Yes!" : "No!"}
          <br />
          <Button.Group size="tiny" style={{ marginTop: 5 }}>
            <Button positive onClick={this.onClickPositive}>
              Yes
            </Button>
            <Button.Or />
            <Button negative onClick={this.onClickNegative}>
              No
            </Button>
          </Button.Group>
        </Cell>
        <Cell textAlign="center">
          <Link
            route={`/stores/${this.props.address}/nimda/products/${id}/updateProduct`}
          >
            <a>
              <Button color="teal" basic>
                Update
              </Button>
            </a>
          </Link>
        </Cell>
      </Row>
    );
  }
}
/*
            { request.complete ? null : (
          <Button color="green" basic onClick={this.onApprove}>
            Approve
          </Button>
            )}
Above code means that if request.complete is true, return null whcih means deleting the button. However, if it is
false, it will return the button.
*/

export default AdminRow;
