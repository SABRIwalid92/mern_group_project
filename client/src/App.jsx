// import './App.css'
import Create from './Create Page/Create'
import img from'../src/assets/background.jpg'
import FeatureSection from './components/FeatureSection';
import Nav from './components/Nav';
import { Routes,Route } from 'react-router-dom';
import NO from './components/NO';

function App() {
  const backgroundImageUrl = 'url("../src/assets/background.jpg")';
  const styles = {
    container: {
      backgroundImage: backgroundImageUrl,
      backgroundSize: 'cover', // Adjust as needed
      backgroundRepeat: 'no-repeat', // Adjust as needed
      width: '100%',
      height: '100vh', // Adjust as needed
      // Other styles...
    },
    
    create:{
      backgroundColor :"#E6CBAD"
    }
  }
  return (
  
  <div>
    <Routes>
      <Route path='/test/' element = {<NO/>} />
      <Route path='/' element = { <div>

    <Nav/>
    <div style={styles.container} className='mt-16'>
    <Create style={styles.create} />
    </div>
    <FeatureSection />
    </div>} />

   
    
    </Routes>
    </div>
   
   
   
  )
}

export default App
