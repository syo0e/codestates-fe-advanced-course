import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Header from "./header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Pages>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<Detail />} />
          </Routes>
        </Pages>
      </div>
    </Router>
  );
}

const Pages = styled.div`
  padding: 20px 30px;
`;

export default App;
