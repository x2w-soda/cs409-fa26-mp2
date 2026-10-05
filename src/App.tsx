import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import GalleryView from './GalleryView'
import ListView from './ListView'
import DetailView from './DetailView'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Router() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <nav>
            <Link to="/list">List</Link> |{" "}
            <Link to="/gallery">Gallery</Link>
          </nav>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/list" element={<ListView />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/detail/:id" element={<DetailView />} />
          </Routes>
        </BrowserRouter>
    )
}

function App() {
    return (
      <Router />
    )
}

export default App
