import React, { useState } from "react";
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
  Block,
  f7,
} from 'framework7-react';



export default ({ f7router }) => {

  const [DonorName, setDonorName] = useState("");
  const [DonorPhone, setDonorPhone] = useState("");
  const [FoodDonation,] = useState("");
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };



};

const submitForm = () => {
  console.log(`Donor name : ${DonorName}`)
  console.log(`Donor Phone : ${DonorPhone}`)
  console.log(`Donation type : ${FoodDonation}`)
};





return (


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
        value={DonorName}
        onInput={(e) => {
          setDonorName(e.target.value);
        }}
      ></ListInput>

      <ListInput
        label="WhatsApp Phone Number"
        type="tel"
        placeholder="Phone"
        value={DonorPhone}
        onInput={(e) => {
          setDonorPhone(e.target.value);
        }}
      ></ListInput>


      <BlockTitle>Choose Donation service</BlockTitle>
      <List>
        <ListItem
          radio
          name="radio"
          value={FoodDonation}
          title="Food Donation"
          onChange={this.handleChange}

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

      <BlockTitle>Submit Details</BlockTitle>
      <Block strong>
        <Button fill onClick={submitForm}>Submit</Button>
      </Block>

    </List>


  </Page >
);

};
