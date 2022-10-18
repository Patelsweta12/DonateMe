import React, { useState, setInputs, Component } from "react";
import { geolocated } from "react-geolocated";
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

export default ({ f7router, Component }) => {
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
      if (!navigator.geolocation) {
        f7.dialog.alert(`Geolocation is not supported by your device.`, () => {
          f7router.back();
        });
      } else {
        console.log("Locating...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            let mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
            setLocation(mapsUrl);
            console.log(`[${latitude},${longitude}]`);
          },
          () => {
            f7.dialog.alert(`Unable to retrieve your location`, () => {
              f7router.back();
            });
          }
        );
      }

      // setLocation(`Joiye chhe... joiye chhee`);
    } else {
      setLocation(`ni juve hutt`);
    }
  };

  const submitForm = () => {
    console.log(`Donor name : ${DonorName}`);
    console.log(`Donor Phone : ${DonorPhone}`);
    console.log(`Donation type : ${FoodDonation}`);
    console.log(`Donation Description : ${DonationDesc}`);
    console.log(`Location Current : ${LocationCheck}`);
    f7.dialog.alert(
      `Donor name : ${DonorName}<br>Donor Phone : ${DonorPhone}<br>Donation type : ${FoodDonation}<br>Donation Description : ${DonationDesc}<br>Location Current : ${LocationCheck}`
    ),
      () => {};
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
