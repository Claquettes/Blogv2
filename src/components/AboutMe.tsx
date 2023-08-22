//we import the scss file
import "./styles/AboutMe.scss";

function AboutMeComponent() {
  return (
    <div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Hey, I'm Mathieu Ponton, also known as Claquettes on the internet. I
          am a french apprentice software engineer, currently studying at{" "}
          <a href="https://polytech.univ-lyon1.fr/">Polytech Lyon</a>. I am
          interested in full stack web development and software engineering
          (mostly in C/C++). I love to learn new things and I am always looking
          for new challenges.
        </p>
        <p>
          I am currently [as of september 2023] in a 3 years apprenticeship at
          the Metropole du Grand Lyon, and doing my diploma as a software
          engineer at Polytech Lyon.
        </p>
        <p>
          Feel free to contact me at{" "}
          <a
            href="mailto:
        math@claq.fr"
          >
            this mail.
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutMeComponent;
