import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchQuery);
    setSearchQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white rounded-lg shadow-md p-2"
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="flex-grow border-none outline-none px-2 py-1"
      />
      <button
        type="submit"
        className="px-2 py-1 bg-amber-400 text-white rounded-md"
      >
        <i className="ri-search-line"></i>
      </button>
    </form>
  );
}
