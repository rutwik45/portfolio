import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProjectScreen from './screens/ProjectScreen';
import ResumeScreen from './screens/ResumeScreen';


function App() {
  return (

    <BrowserRouter>
       <Header></Header>

      <div className='flex flex-col justify-between'>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
          <Route path='/about' element={<AboutScreen/>}/>
          <Route path='/contact' element={<ContactScreen/>}></Route>
          <Route path='/project' element={<ProjectScreen/>}></Route>
          <Route path='/resume' element={<ResumeScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
    
   
  );
}

export default App;
