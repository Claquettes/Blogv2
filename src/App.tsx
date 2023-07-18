import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Article from "./components/Article";
import FilterSelector from "./components/FilterSelector";
import CustomSpinner from "./components/CustomSpinner";
import instances from "./Instances";

import "./App.css";

interface Instance {
  name: string;
  Author: string;
  Date: string;
  Language: string;
  Content: string;
  Image1Link: string;
  Image2Link: string;
  GithubRepoLink: string;
  HostLink: string;
  IsVisible: boolean;
}

function App() {
  const [filteredLanguage, setFilteredLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Instance[]>(instances);

  const handleLanguageChange = (language: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setFilteredLanguage(language);
  };

  const handleOrderChange = (order: string) => {
    if (order === "reverseChronoOrder") {
      setArticles([...articles].reverse());
    }
  };

  const filteredArticles = filteredLanguage
    ? articles.filter((instance) => instance.Language === filteredLanguage)
    : articles;

  return (
    <>
      <TopBar />
      <div>
        <div className="FilterSelectorContainer">
          <FilterSelector
            onLanguageChange={handleLanguageChange}
            onOrderChange={handleOrderChange}
          />
        </div>

        {isLoading ? (
          <CustomSpinner />
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
