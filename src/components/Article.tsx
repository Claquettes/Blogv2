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
      <p className="id">{Id}</p>
      <div className="article-meta">
        <p>Author: {Author}</p>
        <p>Date: {Date}</p>
        <p>Language: {Language}</p>
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
