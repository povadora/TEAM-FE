import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.scss';

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} onChange={handleSearch} />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
