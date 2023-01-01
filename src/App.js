import GlobalStyles from "./assets/css/GlobalStyles";
import UserContex from "./contexts/ValoresBase";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home/Home";

function App() {

  const [teste, setTeste] = useState("")
  return (
    <UserContex.Provider value={{teste}}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContex.Provider>
  );
}

export default App;
