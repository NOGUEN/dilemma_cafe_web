import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoutePaths from "./constants/RoutePaths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutePaths.map((item, index) => (
          <Route key={index} path={item.href} element={item.page}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;