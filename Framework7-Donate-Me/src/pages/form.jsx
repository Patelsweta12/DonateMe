import React, { useState, setInputs } from "react";
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
} from "framework7-react";

export default ({ f7router }) => {
  const [DonorName, setDonorName] = useState("");
  const [DonorPhone, setDonorPhone] = useState("");
  const [FoodDonation, setFoodDonation] = useState("");
  const [DonationDesc, setDonationDesc] = useState("");
  const [LocationCheck, setLocation] = useState("");

  const handleFoodDonationRationButtonUpdate = (e) => {
    setFoodDonation(e.target.value);
  };

  const handleLocationChecker = (e) => {
    if (e.target.checked === true) {
      setLocation(`Joiye chhe... joiye chhee`);
    } else {
      setLocation(`ni juve hutt`);
    }
  };

  const submitForm = () => {
    console.log(`Donor name : ${DonorName}`);
    console.log(`Donor Phone : ${DonorPhone}`);
    console.log(`Donation type : ${FoodDonation}`);
    console.log(`Donation type : ${DonationDesc}`);
    console.log(`Location Current : ${LocationCheck}`);
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
            value="Food Donation"
            title="Food Donation"
            onChange={handleFoodDonationRationButtonUpdate}
          ></ListItem>
          <ListItem
            radio
            name="radio"
            value="Clothes Donation"
            title="Clothes Donation"
            onChange={handleFoodDonationRationButtonUpdate}
          ></ListItem>
          <ListItem
            radio
            name="radio"
            value="Animal Walfare"
            title="Animal Walfare"
            onChange={handleFoodDonationRationButtonUpdate}
          ></ListItem>

          <ListItem
            radio
            name="radio"
            value="Tree Plantation"
            title="Tree Plantation"
            onChange={handleFoodDonationRationButtonUpdate}
          ></ListItem>
        </List>

        <BlockTitle>Donation Discription</BlockTitle>
        <List>
          <ListInput
            type="textarea"
            placeholder="Provide Details"
            resizable
            value={DonationDesc}
            onInput={(e) => {
              setDonationDesc(e.target.value);
            }}
          ></ListInput>
        </List>

        <BlockTitle>Location service </BlockTitle>
        <List>
          <ListItem
            checkbox
            name="my-checkbox"
            value="Use my current location"
            title="Use my current location"
            onChange={handleLocationChecker}
          ></ListItem>
        </List>

        <BlockTitle>Submit Details</BlockTitle>
        <Block strong>
          <Button fill onClick={submitForm}>
            Submit
          </Button>
        </Block>
      </List>
    </Page>
  );
};
