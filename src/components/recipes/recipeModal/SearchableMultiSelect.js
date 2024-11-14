import React, { useCallback, useEffect, useRef, useState } from "react";

const SearchableMultiSelect = ({
  options = [], // List of options to search from
  renderItem,
  onChange,
  value,
  onSelect,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
  }, []);

  // Filter results based on search input
  useEffect(() => {
    if (searchValue) {
      const results = options.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(results);
      setShowResults(true);
    } else {
      setFilteredResults([]);
      setShowResults(false);
    }
  }, [searchValue, options]);

  const handleSelection = (selectedItem) => {
    if (!selectedItem) return resetSearchComplete();

    // Add selected item to the list if not already selected
    if (!selectedItems.includes(selectedItem)) {
      setSelectedItems((prevItems) => [...prevItems, selectedItem]);
      onSelect && onSelect([...selectedItems, selectedItem]);
    }
    resetSearchComplete();
    setSearchValue("");
  };

  const handleRemove = (item) => {
    const updatedItems = selectedItems.filter((i) => i !== item);
    setSelectedItems(updatedItems);
    onSelect && onSelect(updatedItems);
  };

  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % filteredResults.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount = (focusedIndex + filteredResults.length - 1) % filteredResults.length;

    // hide search results
    if (key === "Escape") {
      resetSearchComplete();
    }

    // select the current item
    if (key === "Enter") {
      e.preventDefault();
      handleSelection(filteredResults[focusedIndex]);
    }

    setFocusedIndex(nextIndexCount);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (value) setSearchValue(value);
  }, [value]);

  return (
    <div className="multi-select">
      <div
        tabIndex={1}
        onBlur={resetSearchComplete}
        onKeyDown={handleKeyDown}
        className="relative"
      >
        <input
          value={searchValue}
          onChange={handleChange}
          type="text"
          className="search-input"
          placeholder="Search and select..."
        />

        {/* Search Results Container */}
        {showResults && (
          <div className="results-dropdown">
            {filteredResults.map((item, index) => (
              <div
                key={index}
                onMouseDown={() => handleSelection(item)}
                ref={index === focusedIndex ? resultContainer : null}
                style={{
                  backgroundColor: index === focusedIndex ? "rgba(0,0,0,0.1)" : "",
                }}
                className="result-item"
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Items Container */}
      <div className="selected-items">
        {selectedItems.map((item, index) => (
          <div key={index} className="selected-item">
            {renderItem(item)}
            <button onClick={() => handleRemove(item)} className="remove-btn">
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchableMultiSelect;
