import React, { useState, setInputs, Component } from "react";
import { geolocated } from "react-geolocated";
import { db } from "../js/firebase";
import { collection, addDoc, doc, getDocs } from "firebase/firestore";
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
  TextEditor,
} from "framework7-react";

export default ({ f7router, Component }) => {
  const [DonorName, setDonorName] = useState("");
  const [DonorPhone, setDonorPhone] = useState("");
  const [DonationType, setDonationType] = useState("");
  const [DonationDesc, setDonationDesc] = useState("");
  const [LocationCheck, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getTimestamp = () => {
    const dateObject = new Date();
    // current date
    // adjust 0 before single digit date
    const date = `0 ${dateObject.getDate()}`.slice(-2);
    // current month
    const month = `0 ${dateObject.getMonth() + 1}`.slice(-2);
    // current year
    const year = dateObject.getFullYear();
    // current hours
    var hours = dateObject.getHours();
    // current minutes
    var minutes = dateObject.getMinutes();
    // current seconds
    const seconds = dateObject.getSeconds();
    // prints date & time in YYYY-MM-DD HH:MM:SS format

    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

    return `${date}/${month}/${year} ${strTime}`;
  };

  const load = () => {
    if (isLoading) return;
    setIsLoading(true);
    submitForm();
  };

  const handleDonationTypeRationButtonUpdate = (e) => {
    setDonationType(e.target.value);
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
      setLocation(`NA`);
    }
  };

  const navigateToHome = async () => {
    f7router.navigate("/Home/");
  };

  const submitForm = async () => {
    const isEnable =
      DonorName.length > 0 &&
      DonorPhone.length > 0 &&
      DonationType.length > 0 &&
      DonationDesc.length > 0;

    if (isEnable) {
      const dataA = await getDocs(collection(db, "DonationData"));
      if (dataA.empty) {
        var timeStamp = getTimestamp();
        const docRef = await addDoc(collection(db, "DonationData"), {
          DonorName: DonorName,
          DonorPhone: DonorPhone,
          DonationType: DonationType,
          DonationDesc: DonationDesc,
          LocationCheck: LocationCheck,
          DonationRequested: false,
          TimeStamp: timeStamp,
        });
        f7.dialog.alert(
          `Your Donation request has been submitted on ${timeStamp}.<br>
           One of our registered Organization will contact you.`,
          () => {
            setIsLoading(false);
            navigateToHome();
          }
        );
      } else {
        var doesPhoneExist = false;
        var previousTimeStamp = "";

        await dataA.forEach((doc) => {
          try {
            if (doc.data().DonorPhone === DonorPhone) {
              doesPhoneExist = true;
              previousTimeStamp = doc.data().TimeStamp;
            }
          } catch (error) {
            f7.dialog.alert(`Error ${error}`, () => {
              setIsLoading(false);
              navigateToHome();
            });
          }
        });

        if (!doesPhoneExist) {
          var timeStamp = getTimestamp();
          const docRef = await addDoc(collection(db, "DonationData"), {
            DonorName: DonorName,
            DonorPhone: DonorPhone,
            DonationType: DonationType,
            DonationDesc: DonationDesc,
            LocationCheck: LocationCheck,
            DonationRequested: false,
            TimeStamp: timeStamp,
          });
          f7.dialog.alert(
            `Your Donation request has been submitted on ${timeStamp}.<br>
             One of our registered Organization will contact you.`,
            () => {
              setIsLoading(false);
              navigateToHome();
            }
          );
        } else {
          f7.dialog.alert(
            `Seems like you already have submitted Donation Request on ${previousTimeStamp}.<br>Please allow time for organizations to accept your request.`,
            () => {
              setIsLoading(false);
              navigateToHome();
            }
          );
        }
      }
    } else {
      f7.dialog.alert(`Please fill in entire form`, () => {
        setIsLoading(false);
      });
    }

    // f7.dialog.alert(
    //   `Donor name : ${DonorName}<br>Donor Phone : ${DonorPhone}<br>Donation type : ${DonationType}<br>Donation Description : ${DonationDesc}<br>Location Current : ${LocationCheck}`
    // ),
    //   () => {};
  };

  return (
    <Page name="Donation Request Form">
      <Navbar title="Donation Request Form" backLink="Back"></Navbar>

      <BlockTitle>Your Details</BlockTitle>
      <List noHairlinesMd>
        <ListInput
          required
          validate
          label="Name"
          type="text"
          placeholder="Your name"
          value={DonorName}
          onInput={(e) => {
            setDonorName(e.target.value);
          }}
        ></ListInput>

        <ListInput
          required
          validate
          label="WhatsApp Phone Number"
          type="text"
          pattern="^\d{10}$"
          placeholder="Phone"
          value={DonorPhone}
          onInput={(e) => {
            setDonorPhone(e.target.value);
          }}
        ></ListInput>

        <BlockTitle>Choose Donation service</BlockTitle>
        <List>
          <ListItem
            required
            validate
            radio
            name="radio"
            value="Food Donation"
            title="Food Donation"
            onChange={handleDonationTypeRationButtonUpdate}
          ></ListItem>
          <ListItem
            required
            validate
            radio
            name="radio"
            value="Clothes Donation"
            title="Clothes Donation"
            onChange={handleDonationTypeRationButtonUpdate}
          ></ListItem>
          <ListItem
            required
            validate
            radio
            name="radio"
            value="Animal Walfare"
            title="Animal Walfare"
            onChange={handleDonationTypeRationButtonUpdate}
          ></ListItem>

          <ListItem
            required
            validate
            radio
            name="radio"
            value="Tree Plantation"
            title="Tree Plantation"
            onChange={handleDonationTypeRationButtonUpdate}
          ></ListItem>
        </List>

        <BlockTitle>Donation Discription</BlockTitle>
        <List>
          <TextEditor
            required
            validate
            placeholder="Provide Details about the items that you have for donation..."
            mode="keyboard-toolbar"
            style={{ "--f7-text-editor-height": "150px" }}
            value={DonationDesc}
            onTextEditorChange={(value) => setDonationDesc(value)}
          />
        </List>

        <BlockTitle>Location service </BlockTitle>
        <List>
          <ListItem
            required
            validate
            checkbox
            name="my-checkbox"
            value="Use my current location"
            title="Use my current location"
            onChange={handleLocationChecker}
          ></ListItem>
        </List>

        <BlockTitle>Submit Details</BlockTitle>
        <Block strong>
          <Button fill preloader loading={isLoading} onClick={load}>
            Submit
          </Button>
        </Block>
      </List>
    </Page>
  );
};
