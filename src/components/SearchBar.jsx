import React, { useState } from "react";

function SearchBar({ githubUser, setGithubUser }) {
  const [inputValue, setInputValue] = useState("");
  const [btnClassName, setBtnClassName] = useState("btn btn-success");
  const [inputPlaceholder, setInputPlaceholder] = useState("Search for a GitHub user...");

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
          setBtnClassName("btn btn-success");
          setInputPlaceholder("Search for a GitHub user...");
        } else {
          setInputPlaceholder("User not found. Try again...");
          setBtnClassName("btn btn-danger");
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
        placeholder={inputPlaceholder}
        aria-label="Search"
      />
      <button className={btnClassName} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
