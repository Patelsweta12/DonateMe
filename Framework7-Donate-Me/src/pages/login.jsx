import React, { useState } from "react";
import {
  f7,
  Page,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  Link,
} from "framework7-react";
import { db } from "../js/firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { getDefaultAppConfig } from "@firebase/util";

export default ({ f7router }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    // const encryptedPass = encrypt(password);
    // const decryptedPass = decrypt(encryptedPass);
    // console.log(encryptedPass, decryptedPass);
  };

  // f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
  //   f7router.back();
  // });
  // };
  const registerNow = () => {};

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <LoginScreenTitle>Admin Portal</LoginScreenTitle>
      <List form>
        <ListInput
          label="Username"
          type="text"
          placeholder="Your username"
          value={username}
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <List>
        <ListButton onClick={signIn}>Sign In</ListButton>
        <ListButton>
          <Link href="/RegisterOrganization/">Register Organization</Link>
        </ListButton>
        <BlockFooter>
          Log in to organizational Admin Portal.
          <br />
        </BlockFooter>
      </List>
    </Page>
  );
};
