import UserSection from "./UserSection";
import Repositories from "./Repositories";

function DataContainer({ githubUser}) {
  return (
    <div className = "data-container">
        <UserSection githubUser={githubUser} />
        <Repositories githubUser={githubUser} />
    </div>
  );
}

export default DataContainer;