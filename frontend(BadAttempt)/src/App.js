import "./bootstrap.css";
import "./sidebars.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Books from "./components/Books";
import Users from "./components/Users";
import Subjects from "./components/Subjects";
import ELibrary from "./components/E-Library";
function App() {
  const [currPage, setCurrPage] = useState(0);
  const currentPage = () => {
    switch (currPage) {
      case 0:
        return <Home />;
      case 1:
        return <Books />;
      case 2:
        return <Users />;
      case 3:
        return <Subjects />;
      case 4:
        return <ELibrary />;
    }
  };
  return (
    <div className="container-max-width">
      <Navbar setCurrPage={(num) => setCurrPage(num)} />
      {currentPage()}
    </div>
  );
}

export default App;
