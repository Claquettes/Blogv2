import { Link } from "react-router-dom";

import "./styles/TopBar.scss";

function BasicExample() {
  interface SectionProps {
    id: string;
    title: string;
    content: string[];
  }
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Color Palette, such as defined in the Color-Palette.scss file
  /* $--background-color: #fefae0;
  $--light-contrast: #dda15e;
  $--accent: #bc6c25;
  $--contrast: #283618;
  $--contrast-lighter: #606c38;
  */

  //light mode
  const BackgroundColorLight = "#fefae0";
  /*
  const LightContrast = "#dda15e";
  const Accent = "#bc6c25";
  const ContrastLighter = "#606c38";
  */
  const Contrast = "#283618";

  //dark mode
  //const BackgroundColorDark = "#192a51";
  const BackgroundColorDark = "#000000";
  const ContrastDark = "#fefae0";

  //we define a bool variable called isDarkmode
  let IsDarkmode = true;
  //we define a function that will change the value of isDarkmode
  const changeDarkmode = () => {
    //we reverse the value of isDarkmode
    IsDarkmode = !IsDarkmode;
    console.log(IsDarkmode);
    //we change the background color of the body for the --background-color of the color palette
    if (IsDarkmode) {
      document.body.style.backgroundColor = BackgroundColorDark; //change the color of the background
      document.body.style.color = ContrastDark; //change the color of the text
      //WE CHANGE THE COLOR OF THE TEXT IN THE TOPBAR
      const element = document.getElementsByClassName("Name")[0] as
        | HTMLElement
        | undefined;
      //ce code permet de s'assurer que l'élément existe, pour eviter une erreur
      if (element) {
        element.style.color = ContrastDark;
      }
      //we change the color of the class "letter" in the landing page
      const letters = document.getElementsByClassName(
        "letter"
      ) as HTMLCollectionOf<HTMLElement>;
      if (letters) {
        for (let i = 0; i < letters.length; i++) {
          letters[i].style.backgroundColor = ContrastDark;
          letters[i].style.color = BackgroundColorDark;
        }
      }
      //we change the color of the TopBarLink
      const TopBarLinks = document.getElementsByClassName(
        "TopBarLink"
      ) as HTMLCollectionOf<HTMLElement>;
      if (TopBarLinks) {
        for (let i = 0; i < TopBarLinks.length; i++) {
          TopBarLinks[i].style.color = ContrastDark;
        }
      }
      //We change the color of the p
      const p = document.getElementsByTagName(
        "p"
      ) as HTMLCollectionOf<HTMLElement>;
      if (p) {
        for (let i = 0; i < p.length; i++) {
          p[i].style.color = ContrastDark;
        }
      }
      //we change the color of the a
      const a = document.getElementsByTagName(
        "a"
      ) as HTMLCollectionOf<HTMLElement>;
      if (a) {
        for (let i = 0; i < a.length; i++) {
          a[i].style.color = ContrastDark;
        }
      }
      //we change the color of the border of all of the articles
      const articles = document.getElementsByClassName(
        "article"
      ) as HTMLCollectionOf<HTMLElement>;
      if (articles) {
        for (let i = 0; i < articles.length; i++) {
          articles[i].style.borderColor = ContrastDark;
        }
      }
      //we change the background color of the about me
      const aboutMe = document.getElementsByClassName(
        "about-me"
      ) as HTMLCollectionOf<HTMLElement>;
      if (aboutMe) {
        for (let i = 0; i < aboutMe.length; i++) {
          aboutMe[i].style.borderColor = ContrastDark;
        }
      }
    }
    //LIGHT MODE
    else {
      document.body.style.backgroundColor = BackgroundColorLight;
      document.body.style.color = Contrast;
      //WE CHANGE THE COLOR OF THE TEXT IN THE TOPBAR
      const element = document.getElementsByClassName("Name")[0] as
        | HTMLElement
        | undefined;

      if (element) {
        element.style.color = Contrast;
      }
      //we change the color of the class "letter" in the landing page
      const letters = document.getElementsByClassName(
        "letter"
      ) as HTMLCollectionOf<HTMLElement>;
      if (letters) {
        for (let i = 0; i < letters.length; i++) {
          letters[i].style.backgroundColor = Contrast;
          letters[i].style.color = "white";
        }
      }
      //we change the color of the TopBarLink
      const TopBarLinks = document.getElementsByClassName(
        "TopBarLink"
      ) as HTMLCollectionOf<HTMLElement>;
      if (TopBarLinks) {
        for (let i = 0; i < TopBarLinks.length; i++) {
          TopBarLinks[i].style.color = Contrast;
        }
      }
      //We change the color of the p
      const p = document.getElementsByTagName(
        "p"
      ) as HTMLCollectionOf<HTMLElement>;
      if (p) {
        for (let i = 0; i < p.length; i++) {
          p[i].style.color = Contrast;
        }
      }
      //we change the color of the a
      const a = document.getElementsByTagName(
        "a"
      ) as HTMLCollectionOf<HTMLElement>;
      if (a) {
        for (let i = 0; i < a.length; i++) {
          a[i].style.color = Contrast;
        }
      }
      //we change the color of the border of all of the articles
      const articles = document.getElementsByClassName(
        "article"
      ) as HTMLCollectionOf<HTMLElement>;
      if (articles) {
        for (let i = 0; i < articles.length; i++) {
          articles[i].style.borderColor = Contrast;
        }
      }
      //we change the background color of the about me
      const aboutMe = document.getElementsByClassName(
        "about-me"
      ) as HTMLCollectionOf<HTMLElement>;
      if (aboutMe) {
        for (let i = 0; i < aboutMe.length; i++) {
          aboutMe[i].style.borderColor = Contrast;
        }
      }
    }
  };
  return (
    <div className="TopBar">
      <div className="Name">
        <h1>
          <img src="src/assets/moon.svg" onClick={changeDarkmode}></img>{" "}
          <Link to="/">Mathieu Ponton </Link>
        </h1>
      </div>
      <div className="NavBarDiv">
        <span
          className="TopBarLink"
          onClick={() => scrollToSection("LandingPage")}
        >
          Home
        </span>

        <span className="TopBarLink" onClick={() => scrollToSection("aboutme")}>
          AboutMe
        </span>

        <span
          className="TopBarLink"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </span>
        <Link to="https://www.linkedin.com/in/mathieu-ponton/">
          <span className="TopBarLink">Linkedin</span>
        </Link>
        <Link to="https://www.linkedin.com/in/mathieu-ponton/overlay/1635518664594/single-media-viewer/?profileId=ACoAADOJ2fUBvelmwOJb_f5vHvyX8em8_iQ27Xs">
          <span className="TopBarLink">Resume</span>
        </Link>
      </div>
    </div>
  );
}

export default BasicExample;
