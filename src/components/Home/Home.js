import React, { Fragment } from "react";
import Nav from "../NavBar/Nav";
import classes from "../AllCss/BodyStyle.module.css";
import Footer from "../Footer/Footer.js";
import Button from "../Buttons/Button";
import MobNav from "../MobileNav/MobNav.js";
export default function Home(props) {
  return (
    <Fragment>
      <div className={classes.container}>
        <MobNav></MobNav>
        <Nav class={classes.Nav}></Nav>
        <div className={classes.content_1}>
          <h4 className={classes.heading_4}> Hey!! this is</h4>
          <h1 className={classes.heading_1}> ADAPA VENKATA NAGENDRA BHARAT</h1>
        </div>
        <div className={classes.content_2}>
          <div className={classes.main}>
            <h2 className={classes.heading_2}>I am a</h2>
            <div className={classes.roller}>
              <span className={classes.rolltext}>
                Programmer 👨🏻‍💻
                <br />
                Web Developer 🚀
                <br />
                Front End Enthusiast 🤩
                <br />
                Freelancer🙂
                <br />
                Traveller ✈️
                <br />
              </span>
            </div>
          </div>
          <p>
            Welcome to my portfolio 🙏🏻. This is Bharat I am a junior year
            student at Sathyabama Institute of Science and Technology, currently
            undertaking my Bachelor in Computer Science and Engineering.
          </p>
          <p>
            I'm a programmer, an open source contributor. I am a co-lead for the
            community at Hack Club-SIST and I am also a Microsoft Student Learn
            Ambassador and postman student expert.
          </p>
          <Button name={"More About Me"}></Button>
        </div>
        <Footer class={classes.content_3}></Footer>
      </div>
    </Fragment>
  );
}
