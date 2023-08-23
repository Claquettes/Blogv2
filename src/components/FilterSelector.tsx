import "./styles/FilterSelector.css";

interface FilterSelectorProps {
  onLanguageChange: (language: string) => void;
  onOrderChange: (order: string) => void;
  onYearChange: (year: string | null) => void;
}

function FilterSelector({
  onLanguageChange,
  onOrderChange,
  onYearChange,
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

  return (
    <div className="filter-container">
      <label htmlFor="language">Language:</label>
      <select id="language">
        <option value="reset" onClick={() => handleLanguageChange("")}>
          All
        </option>
        <option value="c++" onClick={() => handleLanguageChange("C++")}>
          C++
        </option>
        <option value="js" onClick={() => handleLanguageChange("Js")}>
          JavaScript
        </option>
        <option value="python" onClick={() => handleLanguageChange("Python")}>
          Python
        </option>
        <option value="ts" onClick={() => handleLanguageChange("TypeScript")}>
          TypeScript
        </option>
        <option value="php" onClick={() => handleLanguageChange("PHP")}>
          PHP
        </option>
      </select>

      <label htmlFor="date">Year</label>
      <select id="date">
        <option value="All" onClick={() => handleYearChange(null)}>
          {" "}
          All{" "}
        </option>
        <option value="2022" onClick={() => handleYearChange("2022")}>
          2022
        </option>
        <option value="2023" onClick={() => handleYearChange("2023")}>
          2023
        </option>
      </select>

      <div className="button-container">
        <button
          id="reset-button"
          onClick={() => {
            handleLanguageChange("");
            handleOrderChange("chronoOrder");
            handleYearChange(null);
          }}
        >
          Reset
        </button>

        <button
          id="chrono-order"
          onClick={() => handleOrderChange("reverseChronoOrder")}
        >
          Reverse Order
        </button>
      </div>
    </div>
  );
}

export default FilterSelector;
