import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import CoinDetailsSection from "./components/CoinDetailsSection";
import LaunchPage from "./components/LaunchPage";
import RankingPage from "./components/RankingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes wrapped inside Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/coins/:coinId"
          element={
            <Layout>
              <CoinDetailsSection />
            </Layout>
          }
        />
        <Route
          path="/launch"
          element={
            <Layout>
              <LaunchPage />
            </Layout>
          }
        />
        <Route
          path="/ranking"
          element={
            <Layout>
              <RankingPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
