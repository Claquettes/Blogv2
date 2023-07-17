import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import "./styles/FilterSelector.css";

function NestedExample() {
  return (
    <ButtonGroup>
      <DropdownButton as={ButtonGroup} title="Order by" id="bg-nested-dropdown">
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
      >
        <Dropdown.Item eventKey="c++">C++</Dropdown.Item>
        <Dropdown.Item eventKey="js">JavaScript</Dropdown.Item>
        <Dropdown.Item eventKey="python">Python</Dropdown.Item>
        <Dropdown.Item eventKey="ts">TypeScript</Dropdown.Item>
        <Dropdown.Item eventKey="php">PHP</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="Filter by Year"
        id="bg-nested-dropdown"
      >
        <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
        <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="Show only"
        id="bg-nested-dropdown"
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
