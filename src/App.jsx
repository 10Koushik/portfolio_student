import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import Projects from "./Components/Projects/projects";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";

function App() {

  return ( 
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
       <Navbar/>
       <Home/>
       <About/>
       <Projects/>
       <Experience/>
       <Footer/>
    </div>
  );
}

export default App;
