import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Homepage from './Pages/Homepage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScreenshotsPage from './Pages/ScreenshotsPage';
import Screenshot from './Pages/Screenshot';
import Results from './Pages/Results';
import { DataProvider } from './context/DataProvider';

function App() {

  return (
    <div className="App">


      <DataProvider>

        <Header />
        <Sidebar />
        <Routes>
          <Route
            path="/directory/screenshots/:id"
            element={<Screenshot />}
          />
          <Route
            path="/directory/screenshots"
            element={<ScreenshotsPage />}
          />
          <Route
            path="/results"
            element={<Results />}
          />
          <Route
            path="/"
            element={<Homepage />}
          />
        </Routes>
        <Footer />


      </DataProvider>


    </div>
  );
}

export default App;
