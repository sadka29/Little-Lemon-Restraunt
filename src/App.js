import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
