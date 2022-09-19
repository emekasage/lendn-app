import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Index from "./components/dashboard/Index";
import Dashboard from "./components/dashboard/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Index />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
