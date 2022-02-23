import "./App.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        LOGO <Link to="/">Events</Link> {""}
        <Link to="features">Features</Link> {""}
        <Link to="community">Community</Link> {""}
        <Link to="catalogue">Catalogue</Link>
      </div>

      <Outlet />
    </div>
  );
}
