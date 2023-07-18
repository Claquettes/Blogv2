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

  return (
    <div className="article">
      <p className="article-title">{Title}</p>
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
          <img src={Image2Link} alt="Image2" />
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
