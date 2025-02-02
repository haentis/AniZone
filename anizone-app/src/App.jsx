import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Search from "./pages/Search";
import Library from "./pages/Library";
import FullAnime from "./pages/FullAnime";

function App() {
  return (
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Библеотека" element={<Library/>}/>
         <Route path="/Аниме/:id" element={<FullAnime/>}/>
       </Routes>
      </BrowserRouter>
  )
}

export default App;
