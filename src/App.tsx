import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Article from "./components/Article";
import FilterSelector from "./components/FilterSelector";

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
    Image1Link: "https://claq.fr/host/cw1.png",
    Image2Link: "https://claq.fr/host/cw2.png",
  },
  {
    name: "DevBlog2",
    value: 10,
    Author: "Calquettes",
    Content:
      "In luctus porta blandit. Morbi vitae metus semper, accumsan nisl eu, blandit odio. Maecenas cursus pulvinar quam, et tincidunt sapien. Curabitur pellentesque ac elit a tristique. Suspendisse sed posuere sem. Donec in lobortis ligula. Aliquam fringilla sed tortor in condimentum. Suspendisse potenti. Sed cursus accumsan ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    Date: "12/12/2020",
    Language: "Js",
    Image1Link: "https://via.placeholder.com/250",
    Image2Link: "https://via.placeholder.com/250",
  },
];

function App() {
  const [filteredLanguage, setFilteredLanguage] = useState("");
  const handleLanguageChange = (language: string) => {
    setFilteredLanguage(language);
  };

  const filteredArticles = filteredLanguage
    ? instances.filter((instance) => instance.Language === filteredLanguage)
    : instances;

  return (
    <>
      <TopBar />
      <div>
        <FilterSelector onLanguageChange={handleLanguageChange} />
        <div className="Articles-container">
          {filteredArticles.map((instance, index) => (
            <Article
              key={index}
              Title={instance.name}
              Id={instance.value}
              Author={instance.Author}
              Date={instance.Date}
              Language={instance.Language}
              Content={instance.Content}
              Image1Link={instance.Image1Link}
              Image2Link={instance.Image2Link}
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
