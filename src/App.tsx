import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-secondary">
      <Outlet />
    </div>
  );
}

export default App;
