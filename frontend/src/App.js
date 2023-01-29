import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./Users";
import Card from "./Card";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Vehicles from "./Vehicles";
import Trips from "./Trips";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="row_container">
          <div className="row_elements">
            <Card title="Users"></Card>
          </div>
          <div className="row_elements">
            <Card title="Vehicles"></Card>
          </div>
          <div className="row_elements">
            <Card title="Trips"></Card>
          </div>
        </div>
        <Routes>
          <Route path="/users" element={<Users />} />

          <Route path="/vehicles" element={<Vehicles />} />

          <Route path="/trips" element={<Trips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
