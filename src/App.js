import React, { useCallback, useState } from "react";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}></Route>
      <Route path="/:category" element={<NewsPage />}></Route>
    </Routes>
  );
};

export default App;
