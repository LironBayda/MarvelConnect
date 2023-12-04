import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Comics_id from "./pages/Comics_id";
import Characters_id from "./pages/Characters_id";

//     character_id
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="comics" element={<Comics />} />
          <Route path="contact" element={<Contact />} />


          <Route path="*" element={<NoPage />} />
           <Route path="comics_id/:character_id" element={<Comics_id />} />
           <Route path="characters_id/:comic_id" element={<Characters_id />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
