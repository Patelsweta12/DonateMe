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

export default ({ f7router }) => {
  const [YourOrgName, SetYourOrgName] = useState("");
  const [YourOrgEmail, SetYourOrgEmail] = useState("");
  const [OrgPhone, SetOrgPhone] = useState("");
  const [Username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const RegisterNow = () => {
    console.log(`Organization Name : ${YourOrgName}`);
    console.log(`Organization Email : ${YourOrgEmail}`);
    console.log(`Phone Number : ${OrgPhone}`);
    console.log(`UserName : ${Username}`);
    console.log(`Password : ${password}`);
    console.log(`Re-Enter Password : ${reEnterPassword}`);

    f7.dialog.alert(
      `Organization Name : ${YourOrgName} , Organization Email : ${YourOrgEmail}
   , Phone Number : ${OrgPhone}
   , UserName : ${Username}
   , Password : ${password}
   , Re-Enter Password : ${reEnterPassword}`,
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
