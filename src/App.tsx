import TopBar from "./components/TopBar";
import Article from "./components/Article";

//we import the css file
import "./App.css";

const instances = [
  {
    name: "DevBlog",
    value: 10,
    Author: "Calquettes",
    Content:
      "In luctus porta blandit. Morbi vitae metus semper, accumsan nisl eu, blandit odio. Maecenas cursus pulvinar quam, et tincidunt sapien. Curabitur pellentesque ac elit a tristique. Suspendisse sed posuere sem. Donec in lobortis ligula. Aliquam fringilla sed tortor in condimentum. Suspendisse potenti. Sed cursus accumsan ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    Date: "12/12/2020",
    Language: "C++",
  },
];

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
              Author={instance.Author}
              Date={instance.Date}
              Language={instance.Language}
              Content={instance.Content}
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
