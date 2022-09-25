import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, Icon, Card, CardContent, CardHeader, Link, CardFooter } from 'framework7-react';

const AboutPage = () => (
  <Page>
    <Navbar title="About" backLink="Back" />



    <Card expandable>
      <CardContent padding={false}>
        <div className="bg-color-green" style={{ height: '700px' }}>
          <CardHeader textColor="white" className="display-block">
            Our Mission :<br></br>

            Make India hunger free.

            <br></br>  Tap to  READ more
            <br />
            <small style={{ opacity: 0.9 }}> <br></br> <img src="https://b.zmtcdn.com/feedingIndia/7c19381e3cea2e1113bfe0f02ae8d7671585280710.png " width="100%" /></small>

          </CardHeader>

          <Link
            cardClose
            color="white"
            className="card-opened-fade-in"
            style={{ position: 'absolute', right: '15px', top: '15px' }}
            iconF7="xmark_circle_fill"
          /><br></br>

        </div>
        <div className="card-content-padding"><br></br>
          <p>
            Feeding India by your support provides the right channels for compassionate citizens to begin and manage initiatives, that solve for hunger locally.
          </p>
          <p>
            Here there are zero-fund volunteer organization that works to get surlus food from resturants and communities to serve the less fortunate. This will help the lesser fortunate section of society we serve include homeless families ,orphanages,patients from public hospitals and old age homes.

          </p>
          <p>
            Feeding India, a non-profit but just by help and support,and is dedicated towards making India hunger-free. With your  help , kitchens and donors, we are moving one step closer to our goal every day. Together, we believe, we can ensure everyone has access to food daily.
          </p>


        </div>
      </CardContent>
    </Card>
    <Card expandable>
      <CardContent padding={false}>
        <div className="bg-color-yellow" style={{ height: '800 x' }}>
          <CardHeader textColor="white" className="display-block">
            The drivers of our mission
            :<br></br>



            <br></br>  Tap to  READ more
            <br />
            <small style={{ opacity: 0.9 }}> <br></br> <img src="https://raw.githubusercontent.com/Patelsweta12/DonateMe/main/Framework7-Donate-Me/src/img/volunteers.png " width="100%" /></small>

          </CardHeader>

          <Link
            cardClose
            color="white"
            className="card-opened-fade-in"
            style={{ position: 'absolute', right: '15px', top: '15px' }}
            iconF7="xmark_circle_fill"
          /><br></br>

        </div>
        <div className="card-content-padding"><br></br>
          <p>
            Feeding India by your support provides the right channels for compassionate citizens to begin and manage initiatives, that solve for hunger locally.
          </p>
          <p>
            Here there are zero-fund volunteer organization that works to get surlus food from resturants and communities to serve the less fortunate. This will help the lesser fortunate section of society we serve include homeless families ,orphanages,patients from public hospitals and old age homes.

          </p>
          <p>
            Feeding India, a non-profit but just by help and support,and is dedicated towards making India hunger-free. With your  help , kitchens and donors, we are moving one step closer to our goal every day. Together, we believe, we can ensure everyone has access to food daily.
          </p>


        </div>
      </CardContent>
    </Card>


  </Page >
);
export default AboutPage;

