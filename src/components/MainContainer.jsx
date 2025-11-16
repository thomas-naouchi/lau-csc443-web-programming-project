import SearchBar from "./SearchBar";
import DataContainer from "./DataContainer";

function MainContainer({ githubUser, setGithubUser }) {
  return (
    <>
      <SearchBar githubUser={githubUser} setGithubUser={setGithubUser} />
      <DataContainer />
    </>
  );
}

export default MainContainer;
