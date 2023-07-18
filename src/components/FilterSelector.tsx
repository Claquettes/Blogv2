import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import "./styles/FilterSelector.css";

interface FilterSelectorProps {
  onLanguageChange: (language: string) => void;
  onOrderChange: (order: string) => void;
  onYearChange: (year: string | null) => void;
  onShowOnlyWebsites: () => void;
  onShowOnlyGames: () => void;
  onShowOnlyApps: () => void;
  onShowOnlyScolar: () => void;
}

function FilterSelector({
  onLanguageChange,
  onOrderChange,
  onYearChange,
  onShowOnlyWebsites,
  onShowOnlyGames,
  onShowOnlyApps,
  onShowOnlyScolar,
}: FilterSelectorProps) {
  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
  };

  const handleOrderChange = (order: string) => {
    onOrderChange(order);
  };

  const handleYearChange = (year: string | null) => {
    onYearChange(year);
  };

  const handleShowOnlyWebsites = () => {
    onShowOnlyWebsites();
  };

  const handleShowOnlyGames = () => {
    onShowOnlyGames();
  };

  const handleShowOnlyApps = () => {
    onShowOnlyApps();
  };

  const handleShowOnlyScolar = () => {
    onShowOnlyScolar();
  };

  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title="Order by"
        id="bg-nested-dropdown"
        className="custom-button"
      >
        <Dropdown.Item
          eventKey="chronoOrder"
          onClick={() => handleOrderChange("chronoOrder")}
        >
          Chronological Order
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="reverseChronoOrder"
          onClick={() => handleOrderChange("reverseChronoOrder")}
        >
          Reverse Chronological Order
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="Filter by Language"
        id="bg-nested-dropdown"
        className="custom-button"
      >
        <Dropdown.Item
          eventKey="c++"
          onClick={() => handleLanguageChange("C++")}
        >
          C++
        </Dropdown.Item>
        <Dropdown.Item eventKey="js" onClick={() => handleLanguageChange("Js")}>
          JavaScript
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="python"
          onClick={() => handleLanguageChange("Python")}
        >
          Python
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="ts"
          onClick={() => handleLanguageChange("TypeScript")}
        >
          TypeScript
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="php"
          onClick={() => handleLanguageChange("PHP")}
        >
          PHP
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="reset"
          onClick={() => handleLanguageChange("")}
        >
          Reset Filter
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="Filter by Year"
        id="bg-nested-dropdown"
        className="custom-button"
      >
        <Dropdown.Item eventKey="2023" onClick={() => handleYearChange("2023")}>
          2023
        </Dropdown.Item>
        <Dropdown.Item eventKey="2022" onClick={() => handleYearChange("2022")}>
          2022
        </Dropdown.Item>
      </DropdownButton>
      <Button
        variant="outline-secondary"
        className="custom-button"
        onClick={() => {
          handleLanguageChange("");
          handleOrderChange("chronoOrder");
          handleYearChange(null);
        }}
      >
        Reset All Filters
      </Button>
    </ButtonGroup>
  );
}

export default FilterSelector;
