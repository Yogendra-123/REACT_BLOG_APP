import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Home from "./Pages/Home";
import Hollywood from "./Pages/Hollywood";
import Bollywood from "./Pages/Bollywood";
import Technology from "./Pages/Technology";
import Fitness from "./Pages/Fitness";
import Foods from "./Pages/Foods";
import SingleBlogPage from "./Pages/SingleBlogPage";
import Details from "./Pages/Details";
import DetailPage from "./Pages/DetailPage";


function App() {
  return (
    <div className="App">
      <Details>
        
        <BrowserRouter>
        <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Foods/>} />
            <Route path=":category/articleid" element={<SingleBlogPage />} />
            <Route path="*" element={<DetailPage/>} />
          </Routes>
        </BrowserRouter>
      </Details>
    </div>
  )
}
export default App;