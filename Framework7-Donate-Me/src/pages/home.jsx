import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "framework7-react";

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link
          iconIos="f7:menu"
          iconAurora="f7:menu"
          iconMd="material:menu"
          panelOpen="left"
        />
      </NavLeft>
      <NavTitle sliding>Donate Me</NavTitle>
      <NavTitleLarge>Donate Me</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Right Link</Link>
    </Toolbar>
    {/* Page content */}

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-pink" style={{ height: "100%" }}>
          <CardHeader textColor="white" className="display-block">
            <b>A life of giving is the life of worth living</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img
            src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/foodimg1.jpg"
            width="100%"
          />
        </div>
      </CardContent>
    </Card>

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-yellow" style={{ height: "100%" }}>
          <CardHeader textColor="black" className="display-block">
            <b> Old clothes still can warm many people</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img
            src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/clothimg-1.png "
            width="100%"
          />
        </div>
      </CardContent>
    </Card>

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-green" style={{ height: "100%" }}>
          <CardHeader textColor="black" className="display-block">
            <b>Plant trees, plant a hope.</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img
            src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/plant-1.jpg "
            width="100%"
          />
        </div>
      </CardContent>
    </Card>

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-blue" style={{ height: "100%" }}>
          <CardHeader textColor="white" className="display-block">
            <b>Rescue: It's not just a verb, it's a promise.</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img
            src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/animal-1.jpg "
            width="100%"
          />
        </div>
      </CardContent>
    </Card>

    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">
            Popup
          </Button>
        </Col>
        <Col width="50">
          {/* <Button fill raised loginScreenOpen="#my-login-screen">
            Organization Log In
          </Button> */}
        </Col>
      </Row>
    </Block>
  </Page>
);
export default HomePage;
