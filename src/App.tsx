import { useState } from "react";
import Article from "./components/Article";
import FilterSelector from "./components/FilterSelector";
import instances from "./Instances";

import "./App.scss";

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
  CoAuthors: string[];
}

function App() {
  const [filteredLanguage, setFilteredLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Instance[]>(instances);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleLanguageChange = (language: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setFilteredLanguage(language);
  };

  const handleOrderChange = (order: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (order === "reverseChronoOrder") {
      setArticles([...articles].reverse());
    }
  };

  const handleYearChange = (year: string | null) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setSelectedYear(year);
  };

  const filteredArticles = articles.filter((instance) => {
    if (filteredLanguage && instance.Language !== filteredLanguage) {
      return false;
    }

    if (selectedYear && !instance.Date.startsWith(selectedYear)) {
      return false;
    }

    // Check the correct properties for each filter category
    return true;
  });

  //we reverse the array to have the most recent articles first
  filteredArticles.reverse();

  return (
    <>
      {isLoading ? (
        <div className="load-wrapp">
          <h1>Your content is loading </h1>
        </div>
      ) : (
        <div className="Corpus-container">
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
                CoAuthors={instance.CoAuthors}
              />
            ))}
          </div>
          <div className="FiltersHolder">
            <FilterSelector
              onLanguageChange={handleLanguageChange}
              onOrderChange={handleOrderChange}
              onYearChange={handleYearChange}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
