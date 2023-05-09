import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import AOS from "aos";
import "aos/dist/aos.css";
import './App.scss';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Base from './components/layouts/Base';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GoToTop from './components/elements/GoToTop';


function App() {
  AOS.init({
    //initialize
  });
  return (
    <>
     <Router>
    <Base>
    <Routes>
      <Route index path='/' element={ <Home/>} ></Route>
      <Route  path='/portfolio' element={ <Portfolio/>} ></Route>
      <Route  path='/contact' element={ <Contact/>} ></Route>
      
    </Routes>
    <GoToTop/>
    </Base>
    </Router>
    
    </>
  );
}

export default App;
