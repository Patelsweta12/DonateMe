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
import AWS from "aws-sdk"

const DynamoDB = new AWS.DynamoDB.DocumentClient({
  region: "us-east-1",
  accessKeyId: "AKIAY24XYFYLRBZBOGD7",
  secretAccessKey: "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"
});

function addNewOrg(OrgName, OrgEmail, OrgPhone, OrgCity, UserName, password) {
  //First Check if Org already been registered or not. 


}


export function ifUserAlreadyInDB(OrgEmail){
  DynamoDB
  .get({
    TableName: "users",
    Key: {
      email_id: OrgEmail,
    },
  })
  .promise()
  .then(data => {
    try {
      if(data.Item.email_id === OrgEmail){
        f7.dialog.alert(
          `User ${OrgEmail} is already in db`,
          () => {}
        );
    }else{
      return false
    }
    } catch (error) {
      return false
    }
  })
  .catch(console.error)
} 

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

    ifUserAlreadyInDB(YourOrgEmail);

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