import React,{useState} from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BeatLoader from "react-spinners/BeatLoader";


function App() {

  const [theme, setTheme] = useState(true); 
  const handleThemeSwitcher = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
};
  return (

    <div className='text-white overflow-x-hidden selection:bg-sky-600'>
     <div className="fixed -z-10 w-full h-full">
     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(129,119,198,0.3),rgba(255,255,255,0))] dark:bg-blue-800"></div>
     </div>
     <div>
     
      <Router>
      <Navbar handleThemeSwitcher={handleThemeSwitcher}  theme={theme}/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
           <Route path="/projects" element={<Projects/>}/>
           <Route path="/contact" element={<Contact/>}/>
        </Routes>
     
  
      </Router>
     </div>
    </div>
  
  )
}

export default App
