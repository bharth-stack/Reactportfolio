import React from "react";
import classesAbout from "./About.module.css";
import classes from "../AllCss/BodyStyle.module.css";
import classesWork from "../Work/Work.module.css";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer.js";
import Me from "../assets/me2.jpg";

import MobNav from "../MobileNav/MobNav.js";
import { Student, NavigationArrow, Phone, EnvelopeOpen } from "phosphor-react";
export default function About() {
  return (
    <div className={classesAbout.AboutContainer}>
      <h2 className={classes.pageName}>About Me</h2>
      <MobNav></MobNav>
      <Nav class={classes.Nav}></Nav>
      <div className={classesAbout.AboutImg}>
        <div className={`${classesWork.container_1} ${classesWork.conta}`}>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img className={classesAbout.Img} src={Me}></img>
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h5>First Name: Venkata Nagendra Bharat</h5>
                <h5>Last Name: Adapa</h5>
                <h5>
                  <Student size={24} weight="thin" />
                  &ensp; Sathyabama IST
                </h5>
                <h5>
                  <NavigationArrow size={24} weight="thin" />
                  &ensp; Chennai,India
                </h5>
                <h5>
                  <Phone size={24} weight="thin" />
                  &ensp; 6301663928
                </h5>
                <h5>
                  <EnvelopeOpen size={24} weight="thin" />
                  &ensp; 6301663928b@gmail.com
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classesAbout.aboutContent}`}>
        <h2>Hi, this is Adapa Venkata Nagendra Bharat</h2>
        <h3>
          I Am a Third Year Student 👦🏻 at Sathyabama Institute of Science and
          Technology currently pursuing my bachelor in Computer Science and
          Engineering.
        </h3>
        <p>
          <span>&#8658;</span> I Am a Programmer. I use C, C++, Java, Python,
          SQL, Data Structures and Algorithms using C andC++ for coding
          programs.
        </p>
        <p>
          <span>&#8658;</span> I Am a Front End Developer. I use Html, CSS,
          Bootstraps, Javascript and React for front end development.
        </p>
        <p>
          <span>&#8658;</span> My Projects. I have done several personal
          projects using web development and also almost all my projects are
          based on web development. My projects are the weather app, Roll your
          dice game, Blackjack and rock paper scissors. • Basically, the weather
          app helps us to find the weather of any region or country and even it
          contains a clock. I built an Expense Tracker, Chat Box, and Movies
          List using React, Firebase API.
        </p>
        <p>
          <span>&#8658;</span> My Contributions. I contributed to PSOC-21 for
          the Bundli-frontend project, For LETSOC-21 I contributed to
          Musicophilia, I have contributed to the data structures and algorithms
          project as part of the cross winter of code program. • Front end
          mentor for Skill Spring which was organized by INDIAN INSTITUTE OF
          INFORMATION TECHNOLOGY NAGPUR (IIITN).
        </p>
        <p>
          <span>&#8658;</span> I Am a Campus Leader for Code For Cause in my
          college. My main job in this program is to promote the open-source
          community and other technologies. Apart from this, campus leaders
          should conduct a meet for every month to explain about the community
          and How to contribute to open source? and some other projects by
          selecting a specific topic.
        </p>
        <p>
          <span>&#8658;</span> I am a Microsoft Learn Student Ambassador. This
          is a program to sponsor students majoring in disciplines related to
          technology. The program is available in most countries, and all
          students at college and university levels are eligible to become a
          part of it. If accepted, Student Partners are assumed to further share
          the knowledge among the academic community.
        </p>
      </div>
      <Footer class={classesAbout.content_3}></Footer>
    </div>
  );
}
