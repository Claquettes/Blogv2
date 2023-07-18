import TopBarArticle from "./TopBarArticle";

//we import the css file
import "./styles/Article.css";

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

  GithubRepoLink: string;
  HostLink: string;

  //internal
  IsVisible: boolean;
  LanguageBadge: string;
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
  } = props;

  function getBadgeUrls(language: string): string[] | undefined {
    const badges: Record<string, string[]> = {
      python: [
        "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
      ],
      js: [
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/HTML-239120?style=flat&logo=html5&logoColor=white",
        "https://img.shields.io/badge/CSS-239120?&style=flat&logo=css3&logoColor=white",
      ],
      cpp: [
        "https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white",
      ],
      typescript: [
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white",
      ],
      react: [
        "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
      ],
      html: [
        "https://img.shields.io/badge/HTML-239120?style=flat&logo=html5&logoColor=white",
      ],
      css: [
        "https://img.shields.io/badge/CSS-239120?&style=flat&logo=css3&logoColor=white",
      ],
      angular: [
        "https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white",
      ],
      bootstrap: [
        "https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white",
      ],
    };

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
        <TopBarArticle
          Author={Author}
          Date={Date}
          Language={Language.toLowerCase()}
        />
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
      <div className="article-links">
        <a href={GithubRepoLink}>Github Repo</a>
        <a href={HostLink}>Host Link</a>
      </div>
    </div>
  );
}

export default MyComponent;
