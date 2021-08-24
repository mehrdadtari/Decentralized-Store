import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import { Link } from "../../../routes";
import web3 from "../../../ethereum/web3";
import Store from "../../../ethereum/store";
import ProductRow from "../../../components/ProductRow";

class ProductIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    const store = Store(address);
    /*
        solidity cannnot return array of struct which in this case is requests. So, instead, we get number of requests 
        from the smart contract and loop over it to read each request.
    */
    const commoditiesCount = await store.methods.getProductsCount().call();

    const commodities = await Promise.all(
      Array(parseInt(commoditiesCount))
        .fill()
        .map((element, index) => {
          return store.methods.products(index).call();
        })
      /*
        Array(requestCount).fill() creates an array with the size of requestsCount. map method fills the elements of this
        array with the mapped values.
        getRequestsCount returns a number inside a string, but the Array constructor expects to be passed a number, 
        not a string. To fix this, we can use the parseInt function on requestCount before passing it into Array.
        */
    );

    return { address, commodities, commoditiesCount };
    //We should return an object not a variable because it is a props. { address } is equivalent to { address: address }
  }

  renderRows() {
    return this.props.commodities.map((commodity, index) => {
      return (
        <ProductRow
          key={index} //key property is a default property for React that we should use whenever we are rendering a list of components.
          commodity={commodity}
          address={this.props.address}
          id={index}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <Header as="h3">Products:</Header>
        <Header>
          <Link route={`/stores/${this.props.address}/products/new`}>
            <a>
              <Button
                primary
                style={{ position: "absolute", left: 1431, top: 80 }}
              >
                Add Product
              </Button>
            </a>
          </Link>
        </Header>
        <Table celled padded>
          <Header>
            <Row>
              <HeaderCell textAlign="center">ID</HeaderCell>
              <HeaderCell textAlign="center">Name</HeaderCell>
              <HeaderCell textAlign="center">Price (Ether)</HeaderCell>
              <HeaderCell textAlign="center">Seller Address</HeaderCell>
              <HeaderCell textAlign="center" singleLine>
                Rating Score
              </HeaderCell>
              <HeaderCell textAlign="center">Total Ratings</HeaderCell>
              <HeaderCell textAlign="center">Sold Items</HeaderCell>
              <HeaderCell textAlign="center">Buy</HeaderCell>
              <HeaderCell textAlign="center">Your Rating</HeaderCell>
              <HeaderCell textAlign="center">Available</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <div>
          Found{" "}
          {
            <span style={{ fontWeight: "bold" }}>
              {this.props.commoditiesCount}
            </span>
          }{" "}
          products.
        </div>
      </Layout>
    );
  }
}

export default ProductIndex;
