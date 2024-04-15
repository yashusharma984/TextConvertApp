import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Textform from './components/Textform';

function App() {
  return (
  <>
   <NavBar title = "Text Convert App" 
   main = "Home"
   about = "About Us"
   find = "Search"/>
   <div className="container my-3">
    <Textform heading = "Enter the text to Analyze below"/>
    </div>
  </>
  
  );
}

export default App;