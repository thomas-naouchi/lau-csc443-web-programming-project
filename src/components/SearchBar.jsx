import React, { useState } from "react";

function SearchBar({ githubUser, setGithubUser }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", inputValue);
    const fetchGithubUser = async (user) => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setGithubUser(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchGithubUser(inputValue);
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        onChange={handleChange}
        placeholder="Search for a GitHub user..."
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
