import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import React,{useState} from "react"
import './App.css';
import Heading from './components/Heading/Heading';
import NavigationBar from './components/NavigationBar/NavigationBar';

// import Home from './components/Home';
//  import FindDoctors from './components/FindDoctors/FindDoctors';

import Tabcompo from './components/TabCompo';
import { Outlet } from 'react-router-dom';
import AskedQue from './components/AskedQue/AskedQue';
import Footer from './components/Footer/Footer';
//import Medicals from './components/FindDoctors/Medicals/Medicals';

//import AppInfo from './components/AppInfo/AppInfo';
//import Footer from './components/Footer/Footer';
//import LatestNews from './components/LatestNews/LatestNews';
//import FindSpecialisation from './components/FindSpecialisation/FindSpecialisation';
// import Card from './components/LatestNews/Card';
function App() {
  const [check,setCheck] = useState(false)
  return (
    <div className="App">
      <Heading/>
      {/* <NavigationBar/> */}
      <Outlet/>
      <AskedQue/>
      <Footer/>
    </div>
  );
}

export default App;
