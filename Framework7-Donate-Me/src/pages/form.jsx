import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

const FormPage = () => (
  <Page name="form">
    <Navbar title="Form" backLink="Back"></Navbar>

    <BlockTitle>Form Example</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="Name"
        type="text"
        placeholder="Your name"
      ></ListInput>

      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>

      <ListInput
        label="URL"
        type="url"
        placeholder="URL"
      ></ListInput>

      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      ></ListInput>

      <ListInput
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></ListInput>

      <ListInput
        label="Gender"
        type="select"
      >
        <option>Male</option>
        <option>Female</option>
      </ListInput>

      <ListInput
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></ListInput>





      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></ListInput>
    </List>



    <BlockTitle>Checkbox group</BlockTitle>
    <List>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Food"
        title="Food"
      ></ListItem>
    </List>

    <BlockTitle>Radio buttons group</BlockTitle>
    <List>
      <ListItem
        radio
        name="radio"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Food"
        title="Food"
      ></ListItem>
    </List>
  </Page>
);

export default FormPage;
