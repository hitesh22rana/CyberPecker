import Categories from './components/Categories';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Categories/>
          <Routes>
            <Route eaxct path="/" element = {<News key="basic" category="basic"/>}></Route>
            <Route exact path="/dataBreach" element = {<News key="dataBreach" category="dataBreach"/>}></Route>
            <Route exact path="/cyberAttack" element = {<News key="cyberAttack" category="cyberAttack"/>}></Route>
            <Route exact path="/vulnerability" element = {<News key="vulnerability" category="vulnerability"/>}></Route>
            <Route exact path="/malware" element = {<News key="malware" category="malware"/>}></Route>
            <Route exact path="/security" element = {<News key="security" category="security"/>}></Route>
            <Route exact path="/privacy" element = {<News key="privacy" category="privacy"/>}></Route>
            <Route exact path="/crypto" element = {<News key="crypto" category="crypto"/>}></Route>
            <Route exact path="/cloud" element = {<News key="cloud" category="cloud"/>}></Route>
            <Route exact path="/tech" element = {<News key="tech" category="tech"/>}></Route>
            <Route exact path="/iot" element = {<News key="iot" category="iot"/>}></Route>
            <Route exact path="/bigData" element = {<News key="bigData" category="bigData"/>}></Route>
            <Route exact path="/business" element = {<News key="business" category="business"/>}></Route>
            <Route exact path="/mobility" element = {<News key="mobility" category="mobility"/>}></Route>
            <Route exact path="/research" element = {<News key="research" category="research"/>}></Route>
            <Route exact path="/corporate" element = {<News key="corporate" category="corporate"/>}></Route>
            <Route exact path="/socialMedia" element = {<News key="socialMedia" category="socialMedia"/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
