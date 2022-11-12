import React, { useState } from "react";
import CryptoJS from "crypto-js";
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
  Actions,
  ActionsGroup,
  ActionsLabel,
  ActionsButton,
} from "framework7-react";
import { db } from "../js/firebase";
import { collection, addDoc, doc, getDocs } from "firebase/firestore";

export default ({ f7router }) => {
  const [YourOrgName, SetYourOrgName] = useState("");
  const [YourOrgEmail, SetYourOrgEmail] = useState("");
  const [OrgPhone, SetOrgPhone] = useState("");
  const [YourCity, SetYourCity] = useState("");
  const [Username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const load = () => {
    if (isLoading) return;
    setIsLoading(true);
    RegisterNow();
  };

  const navigateToHome = async () => {
    f7router.navigate("/Home/");
  };

  const RegisterNow = async () => {
    const isEnable =
      YourOrgName.length > 0 &&
      YourOrgEmail.length > 0 &&
      OrgPhone.length > 0 &&
      YourCity.length > 0 &&
      Username.length > 0 &&
      password.length > 0 &&
      reEnterPassword.length > 0;

    if (isEnable) {
      if (password === reEnterPassword) {
        const dataA = await getDocs(collection(db, "OrganizationUser"));
        if (dataA.empty) {
          const encryptedPass = CryptoJS.AES.encrypt(
            JSON.stringify(password),
            "my-secret-key@123"
          ).toString();

          const docRef = await addDoc(collection(db, "OrganizationUser"), {
            org_Name: YourOrgName,
            org_Email: YourOrgEmail,
            org_phone: OrgPhone,
            org_city: YourCity,
            org_userName: Username,
            org_password: encryptedPass,
            org_verified: false,
          });
          f7.dialog.alert(
            `Your Organization is pending on verification.<br>
          Please allow upto 24 hours for request to be completed.`,
            () => {
              setIsLoading(false);
              navigateToHome();
            }
          );
        } else {
          var doesEmailExist = false;

          await dataA.forEach((doc) => {
            try {
              if (doc.data().org_Email === YourOrgEmail) {
                doesEmailExist = true;
              }
            } catch (error) {
              f7.dialog.alert(`Error ${error}`, () => {
                setIsLoading(false);
                navigateToHome();
              });
            }
          });

          if (!doesEmailExist) {
            const encryptedPass = CryptoJS.AES.encrypt(
              JSON.stringify(password),
              "my-secret-key@123"
            ).toString();
            const docRef = addDoc(collection(db, "OrganizationUser"), {
              org_Name: YourOrgName,
              org_Email: YourOrgEmail,
              org_phone: OrgPhone,
              org_city: YourCity,
              org_userName: Username,
              org_password: encryptedPass,
              org_verified: false,
            });

            f7.dialog.alert(
              `Your Organization is pending on verification.<br>
            Please allow upto 24 hours for request to be completed.`,
              () => {
                setIsLoading(false);
                navigateToHome();
              }
            );
          } else {
            f7.dialog.alert(
              `User ${YourOrgEmail} is already exist try logging in`,
              () => {
                setIsLoading(false);
                navigateToHome();
              }
            );
          }
        }
      } else {
        f7.dialog.alert(`Password and Re-Enter Password should be same`, () => {
          setIsLoading(false);
        });
      }
    } else {
      f7.dialog.alert(`Please fill in entire form`, () => {
        setIsLoading(false);
      });
    }
  };

  return (
    <Page name="Register Your Organization">
      <Navbar title="Register Your Organization" backLink="Back"></Navbar>

      <BlockTitle>Your Details</BlockTitle>
      <List noHairlinesMd>
        <ListInput
          required
          validate
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
          type="email"
          required
          validate
          placeholder="Your Organization Email"
          value={YourOrgEmail}
          onInput={(e) => {
            SetYourOrgEmail(e.target.value);
          }}
        ></ListInput>
        <ListInput
          required
          validate
          pattern="^\d{10}$"
          label="WhatsApp Phone Number"
          type="text"
          placeholder="Phone"
          value={OrgPhone}
          onInput={(e) => {
            SetOrgPhone(e.target.value);
          }}
        ></ListInput>

        <ListInput
          required
          validate
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
          required
          validate
          label="Username"
          type="text"
          placeholder="Choose UserName"
          value={Username}
          onInput={(e) => {
            SetUsername(e.target.value);
          }}
        ></ListInput>
        <ListInput
          required
          validate
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          label="Password"
          type="password"
          placeholder="8 characters with letter, number"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ListInput
          required
          validate
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          label="Re-Enter Password"
          type="password"
          placeholder="8 characters with letter, number"
          value={reEnterPassword}
          onInput={(e) => {
            setReEnterPassword(e.target.value);
          }}
        />
      </List>
      <BlockTitle>Submit Details</BlockTitle>
      <Block strong>
        <Button fill preloader loading={isLoading} onClick={load}>
          Register
        </Button>
      </Block>
    </Page>
  );
};
