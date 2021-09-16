import React, { Component } from "react";
import { Button, Table, Rating, Header } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Store from "../ethereum/store";
import { Link } from "../routes";

class ProductRow extends Component {
  onBuy = async () => {
    const store = Store(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await store.methods.buy(this.props.id).send({
      from: accounts[0],
      value: this.props.commodity.price,
    });
  };

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
              <Button color="yellow" size="tiny" basic>
                See Reviews
              </Button>
            </a>
          </Link>
        </Cell>
        <Cell textAlign="center">{commodity.totalReviews}</Cell>
        <Cell textAlign="center">{commodity.numSoldProduct}</Cell>
        <Cell textAlign="center">
          {!commodity.available ? (
            "Not Available"
          ) : (
            <Button color="green" basic onClick={this.onBuy}>
              Buy
            </Button>
          )}
        </Cell>
        <Cell textAlign="center" singleLine>
          <Link route={`/stores/${this.props.address}/products/${id}/review`}>
            <a>
              <Button color="teal" basic>
                Review
              </Button>
            </a>
          </Link>
        </Cell>
        <Cell textAlign="center">
          <Button.Group size="tiny">
            <Button positive onClick={this.onClickPositive}>
              Yes
            </Button>
            <Button.Or />
            <Button negative onClick={this.onClickNegative}>
              No
            </Button>
          </Button.Group>
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

export default ProductRow;
