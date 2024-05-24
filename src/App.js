import Navbar from "./Navbar";
import "./style.css";
import About from "./pages_of_website/About";
import Portfolio from "./pages_of_website/Portfolios" ;
import Home from "./pages_of_website/Home";
import Contact from "./pages_of_website/Contact";


function App() {
  let Component;
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/portfolio":
       Component = Portfolio
       break
    case "/about":
        Component=About
        break
    case "/contact":
      Component=Contact
      break
  }
  return (<>
   <Navbar />
   <div className="container">
   <Component />
   </div>
    </>
);
}

export default App;

