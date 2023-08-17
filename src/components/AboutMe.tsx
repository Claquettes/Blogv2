//we import the css file

import "./styles/AboutMe.css";

function AboutMeComponent() {
  return (
    <div className="entire-about-me-compo">
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Hey, I'm Mathieu Ponton, also known as Claquettes on the internet. I
          am a french apprentice software engineer, currently studying at
          Polytech Lyon. I am interested in full stack web development and
          software engineering (mostly in C/C++). I love to learn new things and
          I am always looking for new challenges.
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
      <div className="about-me">
        <h1>The Technologies I...</h1>
        <div className="love-to-use">
          <h2>Love to use</h2>
          <div className="technologies">
            <img
              src="https://claq.fr/host/c.png"
              alt="c"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/cpp.png"
              alt="cpp"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/js.png"
              alt="js"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/sql.png"
              alt="sql"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/html.png"
              alt="html"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/css.png"
              alt="css"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/ejs.png"
              alt="ejs"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/linux.png"
              alt="linux"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/git.png"
              alt="git"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/vscode.png"
              alt="vscode"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/ps.png"
              alt="ps"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/pr.png"
              alt="ai"
              className="language-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react"
              className="language-logo"
            />
          </div>
        </div>
        <div className="have-used">
          <h2>Have used</h2>
          <div className="technologies">
            <img
              src="https://claq.fr/host/py.png"
              alt="python"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/php.png"
              alt="php"
              className="language-logo"
            />
            <img
              src="https://claq.fr/host/s.png"
              alt="scheme"
              className="language-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeComponent;
