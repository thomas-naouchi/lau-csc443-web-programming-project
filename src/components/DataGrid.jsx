import UserSection from "./UserSection";
import Repositories from "./Repositories";

function DataGrid() {
  return (
    <div className = "data-container">
        <UserSection />
        <Repositories />
    </div>
  );
}

export default DataGrid;