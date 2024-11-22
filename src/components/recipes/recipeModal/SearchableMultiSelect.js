import React, {  useEffect, useState } from "react";
const SearchableMultiSelect = ({
  options = [], // List of options to search from
  renderItem,
  onSelect,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Filter results based on search input
  useEffect(() => {
    if (searchValue && searchValue.length > 1) {
      const results = options.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchValue, options]);

  const handleSelection = (selectedItem) => {
    if (selectedItem) {
      onSelect([selectedItem]); // Pass the selected item to the parent
    }
    setSearchValue("");
  };

  return (
    <div className="multi-select">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Busca y selecciona"
      />
      {filteredResults.length > 0 && (
        <div className="results-dropdown">
          {filteredResults.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelection(item)}
              className="result-item"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableMultiSelect;
