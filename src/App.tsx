import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./layout";
import HomeContent from "./components/HomeContent";

function App() {
  return (
    <>
      <Layout>
        <HomeContent />
      </Layout>
    </>
  );
}

export default App;
