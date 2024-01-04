import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </>
    );
}

export default App;
