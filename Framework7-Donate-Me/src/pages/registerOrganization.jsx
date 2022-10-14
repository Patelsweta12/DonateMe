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
  const [password, setPassword] = useState("");

  const Register = () => {
    f7.dialog.alert(`Will do, Later`, () => {
      f7router.back();
    });
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
        ></ListInput>
        <ListInput
          label="Email"
          type="text"
          placeholder="Your Organization Email"
        ></ListInput>
        <ListInput
          label="WhatsApp Phone Number"
          type="tel"
          placeholder="Phone"
        ></ListInput>
      </List>

      <BlockTitle>Choose Login Details</BlockTitle>
      <List noHairlinesMd>
        <ListInput
          label="Username"
          type="text"
          placeholder="Choose UserName"
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
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>

      <BlockTitle>Submit Details</BlockTitle>
      <Block strong>
        <Button fill onClick={Register}>Register
        </Button>
      </Block>
    </Page>
  );
};
