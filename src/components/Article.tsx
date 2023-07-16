import TopBar from "./TopBar";
import TopBarArticle from "./TopBarArticle";

//we import the css file
import "./styles/Article.css";

interface Article {
  //visibles to the outside
  Title: string;
  Id: number;
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
    Id,
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
      <h2>{Title}</h2>
      <TopBarArticle Author={Author} Date={Date} Language={Language} />
      <p className="id">{Id}</p>
      <div className="article-meta">
        <span>Author: {Author}</span>
        <span>Date: {Date}</span>
        <span>Language: {Language}</span>
      </div>
      <div className="article-content">
        <div className="article-content-images">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
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
