import React from "react";
import classesWork from "./Work.module.css";
import classes from "../AllCss/BodyStyle.module.css";
import Nav from "../NavBar/Nav";
import mapty from "../assets/mapty.png";
import meetUps from "../assets/meetups.png";
import groceri from "../assets/groceri.png";
import reduxcart from "../assets/reduxcart.png";
import webapp from "../assets/weather.png";
import Footer from "../Footer/Footer.js";
import MobNav from "../MobileNav/MobNav.js";
export default function Work(props) {
  return (
    <div className={classesWork.WorkContainer}>
      <h2 className={classes.pageName}>My Projects</h2>
      <Nav class={` ${classes.Nav}`}></Nav>

      <div className={classesWork.container_1Wrapper}>
        <MobNav></MobNav>
        <div className={classesWork.container_1}>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={meetUps} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>MEETUPS</h4>
                <h5>#react&ensp;#redux&ensp;#firebase</h5>
                <p>
                  An application for adding dialy live meeting details like
                  area, image, description and address. Users can add favourite
                  meetups and add new meetups which will be stored in the
                  firebase.
                </p>
                <a href="https://github.com/bharth-stack/MeetUps">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={groceri} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>GroceryList</h4>
                <h5>#react&ensp;#firebase</h5>
                <p>
                  An application to add items to the shopping cart. Items that
                  are added to the cart will be stored in the backend. The user
                  can use the stored data for purchasing items when he needs
                  them.
                </p>
                <a href="https://github.com/bharth-stack/GroceriList">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={mapty} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>Mapty</h4>
                <h5>#vanillajavaScript</h5>
                <p>
                  It is a map that shows us the current location by using API.
                  We can point a mark on the map for doing exercise. The point
                  takes distance, cadence, time and duration as inputs.
                </p>
                <a href="https://github.com/bharth-stack/Mapty">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={reduxcart} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>ReduxCart</h4>
                <h5>#react&ensp;#redux&ensp;#firebase</h5>
                <p>
                  This application helps the users to add the groceries items,
                  count and the price of each item. Implemented a GroceryList
                  Application using React and Firebase for the backend.
                </p>
                <a href="https://github.com/bharth-stack/ReduXCart">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={webapp} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>WeatherApp</h4>
                <h5>#vanilla avaScript</h5>
                <p>
                  It gives a weather report of a place which was selected by the
                  user. It contains theme changing option and a clock. I used
                  complete frontend and API’s for the project.
                </p>
                <a href="https://github.com/bharth-stack/Weather-report">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class={classesWork.content_3w}></Footer>
    </div>
  );
}
