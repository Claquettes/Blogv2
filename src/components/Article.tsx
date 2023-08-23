//we import the css file
import "./styles/Article.scss";
import "./styles/TopBarArticle.css";
import "./styles/CardProfile.scss";

//we define the card Component

import { Row, Col } from "react-bootstrap";
import CardProfile from "./CardProfile";

interface Article {
  //visibles to the outside
  Title: string;
  Author: string;
  Date: string;
  Language: string;
  Content: string;

  //links
  Image1Link: string;
  Image2Link: string;

  GithubRepoLink?: string;
  HostLink?: string;

  CoAuthors?: string[];

  //internal
  IsVisible?: boolean;
  LanguageBadge?: string;
}

function MyComponent(props: Article) {
  const {
    Title,
    Author,
    Date,
    Language,
    Content,
    Image1Link,
    Image2Link,
    GithubRepoLink,
    HostLink,
    CoAuthors,
  } = props;

  function getBadgeUrls(language: string): string[] | undefined {
    const badges: Record<string, string[]> = {
      python: [
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      ],
      js: [
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      ],
      cpp: [
        "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      ],
      typescript: [
        "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      ],
      react: [
        "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
      ],
      html: [
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      ],
      css: [
        "https://img.shields.io/badge/CSS-239120?&style=flat&logo=css3&logoColor=white",
      ],
      angular: [
        "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
      ],
      bootstrap: [
        "https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white",
      ],
      php: [
        "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
      ],
      reactnative: [
        "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      ],
    };

    if (Language === "C++") return badges["cpp"];

    return badges[language.toLowerCase()];
  }

  // Get badge URLs for the language (including JS, HTML, and CSS for JavaScript)
  const badgeUrls = getBadgeUrls(Language);

  return (
    <div className="article">
      <p className="article-title">{Title}</p>
      {badgeUrls &&
        badgeUrls.map((badgeUrl, index) => (
          <img
            key={index}
            className="language-badge"
            src={badgeUrl}
            alt={Language}
          />
        ))}
      <div className="article-meta">
        <p className="article-author">{Author}</p>
        <p className="article-date">{Date}</p>
        <p className="article-language">{Language}</p>
      </div>
      <div className="article-content">
        <div className="article-content-images">
          <img src={Image1Link} alt="Image1" />
          {Image2Link && <img src={Image2Link} alt="Image2" />}
        </div>
        <div className="article-content-text">
          <p>{Content}</p>
        </div>
      </div>

      {
        //we check if the article has co-authors by checking if the array is not '[""]'
        CoAuthors && CoAuthors[0] !== "" && (
          <div className="article-co-authors">
            <h3>Co-authors:</h3>
            <Row className="article-co-authors-list">
              {CoAuthors.map((coAuthor, index) => (
                <Col key={index}>
                  <CardProfile Name={coAuthor} />
                </Col>
              ))}
            </Row>
          </div>
        )
      }

      <div className="article-links">
        <a href={GithubRepoLink}>{GithubRepoLink && <h3>Github Repo</h3>}</a>
        <a href={HostLink}>{HostLink && <h3>Host Link</h3>}</a>
      </div>
    </div>
  );
}

export default MyComponent;
