import React, { useState } from "react";

import SearchBar from "./SearchBar";
import DataContainer from "./DataContainer";

function MainContainer() {

  const [githubUser, setGithubUser] = useState("");

  return (
    <>
      <SearchBar githubUser={githubUser} setGithubUser={setGithubUser} />
      <DataContainer githubUser={githubUser}  />
    </>
  );
}

export default MainContainer;
