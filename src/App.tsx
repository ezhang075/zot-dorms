import './App.css'
import Navbar from './navbar.tsx'
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import WriteReview from './pages/write-review.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer.tsx'
import DormPage from './pages/dorm-page.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/*routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/write-review' element={<WriteReview />} />
        <Route path='/dorm/:id' element={<DormPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
