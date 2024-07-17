import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/ui/GlobalStyle"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;