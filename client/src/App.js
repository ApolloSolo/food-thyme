import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nationality from "./pages/nationality/Nationality";
import Register from "./pages/Register";
import Fast from "./pages/fast/Fast";
import Mealtimes from "./pages/mealtimes/Mealtimes";
import Diet from "./pages/diet/Diet";
import Nation from "./pages/nationality/Nation";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="h-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nationality" element={<Nationality />} />
          <Route path="/30minutes" element={<Fast />} />
          <Route path="/mealtimes" element={<Mealtimes />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/nationality/:nation" element={<Nation />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;


