import './App.css';
import MenuList from './Components/Menu/MenuList';
import About from './Components/Pages/About';
import Experience from './Components/Pages/Experience';
import Education from './Components/Pages/Education';
import Skills from './Components/Pages/Skills';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div style={{ display: 'flex',
      flexDirection: 'row',
      height: '100%'}}>
       <MenuList/>
       <Routes>
    
    <Route path="/about" element={  <About />}>
    
    </Route>
    <Route path="/" element={  <About />}>
    
    </Route>
    <Route path="/exp" element={ <Experience />}>
     
    </Route>
    <Route path="/edu" element={ <Education />}>
     
    </Route>
    <Route path="/skills" element={<Skills />}>
    
    </Route>
 
</Routes>
      

    </div>
  );
}

export default App;
