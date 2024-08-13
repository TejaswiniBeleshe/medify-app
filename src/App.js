import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import './App.css';
import Heading from './components/Heading/Heading';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Lookingfor from './components/Lookingfor/Lookingfor';
//import AppInfo from './components/AppInfo/AppInfo';
//import Footer from './components/Footer/Footer';
//import LatestNews from './components/LatestNews/LatestNews';
//import FindSpecialisation from './components/FindSpecialisation/FindSpecialisation';
// import Card from './components/LatestNews/Card';
function App() {
  return (
    <div className="App">
    <Heading/>
    < NavigationBar/>
    <Lookingfor/>
    {/* <AppInfo/> */}
     {/* <LatestNews/> */}
     {/* <FindSpecialisation/> */}
    {/* <Footer/> */}
   
    {/* <div className="parent">
    <button type="button" class="btn btn-primary">Primary</button>
       

    </div>
    <div className="child">

    </div> */}
    </div>
  );
}

export default App;
