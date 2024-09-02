import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./router/Main";
import Mypage from "./router/Mypage";
import Search from "./router/Search";
import Like from "./router/Like";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/like" element={<Like />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
