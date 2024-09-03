import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./router/Main";
import Mypage from "./router/Mypage";
import Search from "./router/Search";
import Like from "./router/Like";
import Layout from "./components/layouts/Layout";
import TopBar from "./components/main/TopBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              header={{ header: <TopBar /> }}
              content={{ children: <Main /> }}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Layout
              header={{ header: null }}
              content={{ children: <Search /> }}
            />
          }
        />
        <Route
          path="/like"
          element={
            <Layout
              header={{ header: null }}
              content={{ children: <Like /> }}
            />
          }
        />
        <Route
          path="/mypage"
          element={
            <Layout
              header={{ header: null }}
              content={{ children: <Mypage /> }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
