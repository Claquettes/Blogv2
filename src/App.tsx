import TopBar from "./components/TopBar";
import Article from "./components/Article";

//we import the css file
import "./App.css";

const instances = [{ name: "DevBlog", value: 10 }];

function App() {
  return (
    <>
      <TopBar />
      <div>
        <div className="Articles-container">
          {instances.map((instance, index) => (
            <Article
              key={index}
              Title={instance.name}
              Id={instance.value}
              Author="Author"
              Date="Date"
              Language="Language"
              Content="Content"
              Image1Link="Image1Link"
              Image2Link="Image2Link"
              GithubRepoLink="GithubRepoLink"
              HostLink="HostLink"
              IsVisible={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
