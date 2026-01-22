import './App.css'
import Header from './sections/Header'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="page">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
