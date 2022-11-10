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
  ListButton,
  f7,
} from "framework7-react";
import {db} from '../js/firebase'
import { collection, addDoc } from "firebase/firestore"; 

export default ({ f7router }) => {
  const [YourOrgName, SetYourOrgName] = useState("");
  const [YourOrgEmail, SetYourOrgEmail] = useState("");
  const [OrgPhone, SetOrgPhone] = useState("");
  const [YourCity, SetYourCity] = useState("");
  const [Username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const RegisterNow = () => {
    console.log(`Organization Name : ${YourOrgName}`);
    console.log(`Organization Email : ${YourOrgEmail}`);
    console.log(`Phone Number : ${SetOrgPhone}`);
    console.log(`City : ${YourCity}`);
    console.log(`UserName : ${SetUsername}`);
    console.log(`Password : ${setPassword}`);
    console.log(`Re-Enter Password : ${setReEnterPassword}`);


    if(password === reEnterPassword){
      const docRef = addDoc(collection(db, "OrganizationUser"), {
        org_Name: YourOrgName,
        org_Email: YourOrgEmail,
        org_phone: OrgPhone,
        org_city: YourCity,
        org_userName: Username,
        org_password: password
      });
      console.log("Document written with ID: ", docRef.id);
    }else{
      f7.dialog.alert(
        `Password and Re-Enter Password should be same`,
        () => {}
      );
    }

    f7.dialog.alert(
      `Organization Name : ${YourOrgName}<br>Organization Email : ${YourOrgEmail}<br>Phone Number : ${OrgPhone}<br> City : ${YourCity}<br>UserName : ${Username}<br>Password : ${password}<br> Re-Enter Password : ${reEnterPassword}`,
      () => {}
    );

   

    f7.dialog.alert(
      `Organization Name : ${YourOrgName}<br>Organization Email : ${YourOrgEmail}<br>Phone Number : ${OrgPhone}<br> City : ${YourCity}<br>UserName : ${Username}<br>Password : ${password}<br> Re-Enter Password : ${reEnterPassword}`,
      () => {}
    
    );
  };

  return (
    <Page name="Register Your Organization">
      <Navbar title="Register Your Organization" backLink="Back"></Navbar>

      {/* Toolbar */}
      <Toolbar bottom>
        <Link>Right Link</Link>
      </Toolbar>

      <BlockTitle>Your Details</BlockTitle>
      <List noHairlinesMd>
        <ListInput
          label="Name"
          type="text"
          placeholder="Your Organization Name"
          value={YourOrgName}
          onInput={(e) => {
            SetYourOrgName(e.target.value);
          }}
        ></ListInput>
        <ListInput
          label="Email"
          type="text"
          placeholder="Your Organization Email"
          value={YourOrgEmail}
          onInput={(e) => {
            SetYourOrgEmail(e.target.value);
          }}
        ></ListInput>
        <ListInput
          label="WhatsApp Phone Number"
          type="tel"
          placeholder="Phone"
          value={OrgPhone}
          onInput={(e) => {
            SetOrgPhone(e.target.value);
          }}
        ></ListInput>

        <ListInput
          label="City"
          type="text"
          placeholder="City"
          value={YourCity}
          onInput={(e) => {
            SetYourCity(e.target.value);
          }}
        ></ListInput>
      </List>

      <BlockTitle>Choose Login Details</BlockTitle>
      <List noHairlinesMd>
        <ListInput
          label="Username"
          type="text"
          placeholder="Choose UserName"
          value={Username}
          onInput={(e) => {
            SetUsername(e.target.value);
          }}
        ></ListInput>
        <ListInput
          label="Password"
          type="password"
          placeholder="Create Password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ListInput
          label="Re-Enter Password"
          type="password"
          placeholder="Re-Enter Password"
          value={reEnterPassword}
          onInput={(e) => {
            setReEnterPassword(e.target.value);
          }}
        />
      </List>

      <BlockTitle>Submit Details</BlockTitle>
      <Block strong>
        <Button fill onClick={RegisterNow}>
          Register
        </Button>
      </Block>
    </Page>
  );
};
