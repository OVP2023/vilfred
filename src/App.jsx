import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import FamilyPage from './components/FamilyPage'
import PuppyPage from './components/PuppyPage'
import ServicePage from './components/ServicePage'
import TravelPage from './components/TravelPage'
import HolidaysPage from './components/HolidaysPage'
import FazendaPage from './components/FazendaPage'
import BeautyPage from './components/BeautyPage'
import SportPage from './components/SportPage'
import Menu from './components/Menu'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />}>
        <Route index element={<HomePage />}/>
        <Route path='family' element={<FamilyPage />}/>
        <Route path='puppy' element={<PuppyPage />}/>
        <Route path='service' element={<ServicePage />}/>
        <Route path='travel' element={<TravelPage />}/>
        <Route path='holidays' element={<HolidaysPage />}/>
        <Route path='beauty' element={<BeautyPage />}/>
        <Route path='sport' element={<SportPage />}/>
        <Route path='fazenda' element={<FazendaPage />}/>
      </Route>     
    </Routes>
  );
}

export default App



