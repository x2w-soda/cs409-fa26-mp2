import './App.css'
import GalleryView from './GalleryView'
import ListView from './ListView'
import DetailView from './DetailView'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <nav>
            <Link to="/list">List</Link> |{" "}
            <Link to="/gallery">Gallery</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ListView />} />
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
