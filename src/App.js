import Rockets from "./pages/rockets";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Rocket from "./pages/rocket";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Rockets />}/>
        <Route exact path="/rocket/:id" element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
