import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  Block,
  Button,
  Popup,
  NavRight,
  Link,
  BlockTitle,
  f7,
  List,
  ListItem,
  Swiper,
  SwiperSlide,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Badge,
} from "framework7-react";
import { db } from "../js/firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import store from "../js/store";
import { arayDonationRequestList } from "../pages/login";
import routes from "../js/routes";

const RequestAndLoad = (props) => {
  const { f7route, f7router } = props;
  const [popupOpened, setPopupOpened] = useState(false);
  const popup = useRef(null);
  const { user } = props;
  var donationRequests = null;
  const [isLoading, setIsLoading] = useState(false);

  const LoadDonationDataPg = () => {
    f7router.navigate("/loadDonationData/");
  };

  async function updateDB(phnoe) {
    const tmpRequests = await getDocs(collection(db, "DonationData"));
    var docId = "";
    var tmpBool = null;
    await tmpRequests.forEach(async (doc) => {
      const donorPhone = await doc.data().DonorPhone;

      if (donorPhone === phnoe) {
        docId = doc.id;
        tmpBool = doc.data().DonationRequested;
      }
    });
    console.log(tmpBool);
    if (!tmpBool) {
      var docRef = await doc(db, "DonationData", docId);
      const data = {
        DonationRequested: true,
      };
      await updateDoc(docRef, data);
      await navigateUrl();
    } else {
      f7.dialog.alert(`It has already been Approved!`, () => {});
    }
  }

  async function navigateUrl() {
    f7.dialog.alert(`Log in again to see update`, () => {
      f7router.navigate("/AdminPortal/");
    });
  }

  return (
    <Page noToolbar noNavbar noSwipeback>
      <Navbar title={`${user.firstName} ${user.lastName}`} />
      <Block strong>
        {user.about}
        Following are donation requests submitted by users:
      </Block>
      <List>
        {arayDonationRequestList.map((number, index) => (
          <Card className="demo-facebook-card" key={index}>
            <CardHeader className="no-border">
              <div className="demo-facebook-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  width="34"
                  height="34"
                />
              </div>
              <div className="demo-facebook-name">
                Name : {number.DonorName}
              </div>
            </CardHeader>
            <CardContent padding={false}>
              <Block strong>
                <List> Phone : {number.DonorPhone}</List>
              </Block>
              <Block strong>
                <List> Donation Type : {number.DonationType}</List>
              </Block>
              <Block strong>
                <List> Description : {number.DonationDesc}</List>
              </Block>
              <Block strong>
                <Button outline>
                  <Link href={number.LocationCheck} external>
                    View Donor Location
                  </Link>
                </Button>
              </Block>

              <Block strong>
                <Button outline>
                  <Link
                    href={
                      "https://wa.me/91" +
                      number.DonorPhone +
                      "?text=Dear " +
                      number.DonorName +
                      ",%0a%0aI am reaching out from, " +
                      user.firstName +
                      ".%0aWe are interested in your donation request of " +
                      number.DonationType +
                      ".%0a%0aLet's communicate further and make arrangements to receive your donation.%0a%0aThank You!"
                    }
                    external
                  >
                    Communicate via WhatsApp
                  </Link>
                </Button>
              </Block>

              <Block strong>
                <Button
                  outline
                  onClick={async () => updateDB(number.DonorPhone)}
                >
                  Approve
                </Button>
              </Block>
            </CardContent>
            <CardFooter className="no-border">
              {number.DonationRequested ? (
                <Badge color="orange">IN PROGRESS</Badge>
              ) : (
                <Badge color="green">NEW</Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </List>
    </Page>
  );
};
export default RequestAndLoad;
