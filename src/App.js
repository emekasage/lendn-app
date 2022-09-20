import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Index from "./components/dashboard/Index";
import Dashboard from "./components/dashboard/pages/dashboard/Dashboard";
import FundsTransfer from "./components/dashboard/pages/transfer/FundsTransfer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard/" element={<Index />}>
          <Route path="" element={<Dashboard />} />
          <Route path="funds-transfer" element={<FundsTransfer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
