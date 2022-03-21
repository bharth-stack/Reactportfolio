import React from "react";
import classes from "./Footer.module.css";
export default function Footer(props) {
  return (
    <div className={props.class}>
      <div className={`${classes.FooterAlign}`}>
       
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.facebook}`}>
            <div className={classes.tooltip}>Github</div>
            <span>
              <a href="https://github.com/bharth-stack">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.facebook}`}>
            <div className={classes.tooltip}>Twitter</div>
            <span>
              <a href="https://twitter.com/BHARAT_abh">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.facebook}`}>
            <div className={classes.tooltip}>Linkedin</div>
            <span>
              <a href="https://www.linkedin.com/in/bharathadapa/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.facebook}`}>
            <div className={classes.tooltip}>Mail</div>
            <span>
              <a href="mailto:6301663928b@gmail.com">
                <ion-icon name="mail"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.facebook}`}>
            <div className={classes.tooltip}>whatsapp</div>
            <span>
              <a href="https://wa.me/6301663928 ">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </span>
          </div>
        </div>
      </div>
      <p>Copyright ©2022 by BHARAT. All rights reserved.</p>
    </div>
  );
}
