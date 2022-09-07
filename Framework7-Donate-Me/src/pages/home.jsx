import React from 'react';
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
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Donate Me</NavTitle>
      <NavTitleLarge>Donate Me</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    {/* Page content */}

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-pink" style={{ height: '100%' }}>
          <CardHeader textColor="white" className="display-block">
            <b>A life of giving is the life
              of
              worth living</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/foodimg1.jpg" width="100%" />
        </div>
      </CardContent>
    </Card>

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-yellow" style={{ height: '100%' }}>
          <CardHeader textColor="black" className="display-block">
            <b> Old clothes still can warm
              many
              people</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/clothimg-1.png " width="100%" />
        </div>
      </CardContent>
    </Card>

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-green" style={{ height: '100%' }}>
          <CardHeader textColor="black" className="display-block">
            <b>Plant trees, plant a
              hope.</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/plant-1.jpg " width="100%" />
        </div>
      </CardContent>
    </Card>

    <Card className="demo-facebook-card">
      <CardContent padding={false}>
        <div className="bg-color-blue" style={{ height: '100%' }}>
          <CardHeader textColor="white" className="display-block">
            <b>Rescue: It's not just a
              verb,
              it's a promise.</b>
            <br />
            <small style={{ opacity: 0.8 }}>Help & Grow</small>
          </CardHeader>
          <img src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/animal-1.jpg " width="100%" />
        </div>
      </CardContent>
    </Card>


    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/about/" title="About" />
      <ListItem link="/form/" title="Form" />
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
      </Row>
    </Block>

    <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
  </Page>
);
export default HomePage;