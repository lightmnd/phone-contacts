import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Contacts";
import CreateContact from "./CreateContact";
import UpdateContact from "./UpdateContact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/update" element={<UpdateContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
