import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toolbar,
  BlockTitle,
  Link,
  Button,
  Range,
  Block
} from 'framework7-react';

const FormPage = () => (
  <Page name="Donation Request Form">
    <Navbar title="Donation Request Form" backLink="Back"></Navbar>

    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Right Link</Link>
    </Toolbar>

    <BlockTitle>Your Details</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="Name"
        type="text"
        placeholder="Your name"
      ></ListInput>

      <ListInput
        label="WhatsApp Phone Number"
        type="tel"
        placeholder="Phone"
      ></ListInput>


      <BlockTitle>Choose Donation service</BlockTitle>
      <List>
        <ListItem
          radio
          name="radio"
          value="Food Donation"
          title="Food Donation"
        ></ListItem>
        <ListItem
          radio
          name="radio"
          value="Clothes Donation"
          title="clothes Donation"
        ></ListItem>
        <ListItem
          radio
          name="radio"
          value="Animal Walfare"
          title="Animal Walfare"
        ></ListItem>

        <ListItem
          radio
          name="radio"
          value="Tree Plantation"
          title="Tree Plantation"
        ></ListItem>




      </List>

      <BlockTitle>Donation Discription</BlockTitle>
      <List>
        <ListInput
          type="textarea"
          placeholder="Provide Details"
          resizable
        ></ListInput>
      </List>

      <BlockTitle>Location service </BlockTitle>
      <List>
        <ListItem
          checkbox
          name="my-checkbox"
          value="Use my current location"
          title="Use my current location"
        ></ListItem>

      </List>

    </List>


  </Page >
);

export default FormPage;
