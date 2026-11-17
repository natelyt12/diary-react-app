import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Write from "./pages/write";
import Summary from "./pages/summary";
import Settings from "./pages/settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-neutral-50 min-h-dvh">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/write" element={<Write />} />
          <Route path="/summary" element={<Summary/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
