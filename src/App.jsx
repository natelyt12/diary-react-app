import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Write from "./pages/write";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-neutral-50 min-h-dvh">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
