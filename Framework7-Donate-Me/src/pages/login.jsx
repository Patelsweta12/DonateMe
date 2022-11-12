import React, { useState } from "react";
import CryptoJS from "crypto-js";
import {
  f7,
  Page,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  Link,
  Navbar,
  Toolbar,
  BlockTitle,
  Icon,
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  Button,
  Block,
} from "framework7-react";
import { db } from "../js/firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDefaultAppConfig } from "@firebase/util";
export var arayDonationRequestList = [];

async function getDonationRequestList() {
  const tmpRequests = await getDocs(collection(db, "DonationData"));
  arayDonationRequestList = [];
  try {
    await tmpRequests.forEach((doc) => {
      const DonationDesc = doc.data().DonationDesc;
      const DonationRequested = doc.data().DonationRequested;
      const DonationType = doc.data().DonationType;
      const DonorName = doc.data().DonorName;
      const DonorPhone = doc.data().DonorPhone;
      const LocationCheck = doc.data().LocationCheck;

      arayDonationRequestList.push({
        DonationDesc: DonationDesc,
        DonationRequested: DonationRequested,
        DonationType: DonationType,
        DonorName: DonorName,
        DonorPhone: DonorPhone,
        LocationCheck: LocationCheck,
      });
    });
  } catch (error) {
    f7.dialog.alert(`Error ${error}`, () => {});
  }
}

export default ({ f7router }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigateToHome = async () => {
    f7router.navigate("/Home/");
  };

  const navigateToRegisterOrg = async () => {
    f7router.navigate("/RegisterOrganization/");
  };

  var userURl = "/request-and-load/user/";

  const loginSuccess = async () => {
    f7router.navigate(userURl);
  };

  const load = async () => {
    const encryptedPass = CryptoJS.AES.encrypt(
      JSON.stringify("Admin"),
      "my-secret-key@123"
    ).toString();
    console.log(encryptedPass);
    if (isLoading) return;
    setIsLoading(true);
    await signIn();
  };

  const signIn = async () => {
    const isEnable = username.length > 0 && password.length > 0;

    if (isEnable) {
      const dataA = await getDocs(collection(db, "OrganizationUser"));
      if (dataA.empty) {
        f7.dialog.alert(
          `Please get your Organization Registered.<br>
           If aleady registerd, Please allow upto 24 hours for your organization to be approved.`,
          () => {
            setIsLoading(false);
          }
        );
      } else {
        var isUserEmailLocated = false;

        var dbPassword = "NaN";
        var isOrganizationRegistered = false;
        var orgName = "NaN";

        await dataA.forEach((doc) => {
          try {
            if (doc.data().org_Email === username) {
              isUserEmailLocated = true;
              dbPassword = doc.data().org_password;
              orgName = doc.data().org_Name;
              isOrganizationRegistered = doc.data().org_verified;
            }
          } catch (error) {
            f7.dialog.alert(`Error ${error}`, () => {
              setIsLoading(false);
              navigateToHome();
            });
          }
        });

        if (!isUserEmailLocated) {
          f7.dialog.alert(
            `Looks like your Organization has not been registered yet.<br>
            Please click "OK" to register`,
            () => {
              setIsLoading(false);
              navigateToRegisterOrg();
            }
          );
        }

        var isPasswordValidated = false;
        var bytes = CryptoJS.AES.decrypt(dbPassword, "my-secret-key@123");
        if (password === JSON.parse(bytes.toString(CryptoJS.enc.Utf8))) {
          isPasswordValidated = true;
        } else {
          f7.dialog.alert(
            `Please contact support team to get your password reset`,
            "Invalid Password",
            setIsLoading(false)
          );
        }

        if (isUserEmailLocated && !isOrganizationRegistered) {
          f7.dialog.alert(
            `Looks like you have already submited Registration request<br>
              Please allow upto 24 hours for your organization to be approved.`,
            () => {
              setIsLoading(false);
              navigateToHome();
            }
          );
        }

        if (
          isUserEmailLocated &&
          isOrganizationRegistered &&
          isPasswordValidated
        ) {
          userURl = userURl + `${username}/OrgName/${orgName}/`;
          loginSuccess();
          await getDonationRequestList();
        }
      }
    } else {
      f7.dialog.alert(
        `Please fill in Organization Email and Password to Login`,
        () => {
          setIsLoading(false);
        }
      );
    }
  };

  // f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
  //   f7router.back();
  // });
  // };
  const AboutPage = () => (
    <Page>
      <Navbar title="About" backLink="Back" />

      <Card
        title="Card header"
        content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
        footer="Card footer"
      ></Card>
      <Card content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "></Card>
    </Page>
  );

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <LoginScreenTitle>Admin Portal</LoginScreenTitle>
      <List form>
        <ListInput
          required
          validate
          label="Organization Email"
          type="email"
          placeholder="Type Your Organization Email"
          value={username}
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ListInput
          required
          validate
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          label="Password"
          type="password"
          placeholder="Your password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <Block strong>
        <Button fill preloader loading={isLoading} onClick={load}>
          Sign In
        </Button>
      </Block>
      <Block strong>
        <List>
          <Button>
            <Link href="/RegisterOrganization/">Register Organization</Link>
          </Button>
        </List>
      </Block>
      <BlockFooter>
        <br />
        <br />
        Log in to organizational Admin Portal.
        <br />
      </BlockFooter>
    </Page>
  );
};
