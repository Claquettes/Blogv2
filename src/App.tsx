import React, { useState } from "react";
//components
import TopBar from "./components/TopBar";
import Article from "./components/Article";
import FilterSelector from "./components/FilterSelector";
import CustomSpinner from "./components/CustomSpinner";

//we import the css file
import "./App.css";

//we import the instances
import instances from "./Instances";

function App() {
  const [filteredLanguage, setFilteredLanguage] = useState("");

  const handleLanguageChange = (language: string) => {
    setIsLoading(true);
    //we wait 1 second to simulate a real request
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setFilteredLanguage(language);
  };

  const filteredArticles = filteredLanguage
    ? instances.filter((instance) => instance.Language === filteredLanguage)
    : instances;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <TopBar />
      <div>
        <div className="FilterSelectorContainer">
          <FilterSelector onLanguageChange={handleLanguageChange} />
        </div>

        {isLoading ? (
          <CustomSpinner /> //we display the spinner if the data is loading
        ) : (
          <div className="Articles-container">
            {filteredArticles.map((instance, index) => (
              <Article
                key={index}
                Title={instance.name}
                Author={instance.Author}
                Date={instance.Date}
                Language={instance.Language}
                Content={instance.Content}
                Image1Link={instance.Image1Link}
                Image2Link={instance.Image2Link}
                GithubRepoLink={instance.GithubRepoLink}
                HostLink={instance.HostLink}
                IsVisible={true}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
