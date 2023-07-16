import TopBar from "./components/TopBar";
import Article from "./components/Article";

const instances = [
  { name: "Instance 1", value: 10 },
  { name: "Instance 2", value: 20 },
  { name: "Instance 3", value: 30 },
];

function App() {
  return (
    <>
      <TopBar />
      <div>
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
    </>
  );
}

export default App;
