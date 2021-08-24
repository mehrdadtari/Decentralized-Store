import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Rating, Container, Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Store from "../ethereum/store";

class StoreIndex extends Component {
  /*
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }
  In next.js, we have server side rendering which cannot execute componentDidMount() life cycle method.
  Instead, we use another life cycle method called getInitialProps() which is specific to next.js.
  */
  static async getInitialProps() {
    const stores = await factory.methods.getDeployedStores().call();
    const storesCount = stores.length;

    const storeList = await stores.map((address) => {
      return Store(address);
    });

    const storeDetails = await Promise.all(
      Array(storesCount)
        .fill()
        .map((element, index) => {
          return storeList[index].methods.getStoreSummary().call();
        })
    );

    const storeNames = storeDetails.map((myStores) => {
      return myStores[4];
    });

    const storeRatings = storeDetails.map((myStores) => {
      return myStores[5];
    });

    return { stores, storeNames, storeRatings };
    /*
      return { campaigns } creates a new props object called campaigns and assigns the campaigns value of the previous line
      to it.
    */
  }
  //commodity.reviewScore}/{5} <br />

  //   <Card.Content extra textAlign={"right"}>
  //   <Rating
  //     floated="right"
  //     icon="star"
  //     defaultRating={3}
  //     maxRating={5}
  //     disabled
  //   />
  // </Card.Content>

  //   <Container textAlign="left">
  //   {this.props.storeNames[index]}
  // </Container>
  // <Container textAlign="right">
  //   <Rating icon="star" defaultRating={3} maxRating={5} disabled />
  // </Container>

  renderStores() {
    const items = this.props.stores.map((address, index) => {
      return (
        <Card fluid key={index}>
          <Card.Content>
            <Card.Header>
              <Container textAlign="left">
                {this.props.storeNames[index]}
              </Container>
              <Header floated="right">
                <Rating
                  size="huge"
                  icon="star"
                  defaultRating={this.props.storeRatings[index]}
                  maxRating={5}
                  disabled
                />
              </Header>
            </Card.Header>
            <Card.Meta style={{ marginTop: 5 }}>{address}</Card.Meta>
            <Card.Description>
              <Link route={`/stores/${address}`}>
                <a>View Store</a>
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
      );
    });

    return <Card.Group>{items}</Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Stores:</h3>

          <Link route="/stores/new">
            <a>
              <Button
                style={{ marginLeft: 15 }}
                floated="right"
                content="Create Store"
                icon="add circle"
                primary
              />
            </a>
          </Link>
        </div>
        <div>{this.renderStores()}</div>
      </Layout>
    );
  }
}
//In render() method, primary is equivalent to primary="true"
//Card.Group and Button are components from semantic-ui-react.
//NOTICE!: The semantic-ui-react documentation gives a wrong href for css file!
/*
  All the JSX code written inside <Layout> tag is passed to Layout component as
  props.children property.
*/
/*
  In order to make "create campaign" button to appear on the right side, we have to 
  add floated="right" property to Button tag and also render Button before {this.renderCampaigns()}.
*/
export default StoreIndex;
