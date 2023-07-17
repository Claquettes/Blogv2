import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";

import "./styles/FilterSelector.css";

interface FilterSelectorProps {
  onLanguageChange: (language: string) => void;
}

function NestedExample({ onLanguageChange }: FilterSelectorProps) {
  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
  };

  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title="Order by"
        id="bg-nested-dropdown"
        className="custom-button"
      >
        <Dropdown.Item eventKey="chronoOrder">
          Chronological Order
        </Dropdown.Item>
        <Dropdown.Item eventKey="reverseChronoOrder">
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
        <Dropdown.Item
          eventKey="js"
          onClick={() => handleLanguageChange("JavaScript")}
        >
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
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="Filter by Year"
        id="bg-nested-dropdown"
        className="custom-button"
      >
        <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
        <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="Show only"
        id="bg-nested-dropdown"
        className="custom-button"
      >
        <Dropdown.Item eventKey="websites">Websites</Dropdown.Item>
        <Dropdown.Item eventKey="games">Games</Dropdown.Item>
        <Dropdown.Item eventKey="apps">Apps</Dropdown.Item>
        <Dropdown.Item eventKey="scolar">Scolar Projects</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default NestedExample;
