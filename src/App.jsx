import './App.css'
import ClientsUi from './clients/ClientsUi'
import Community from './clients/Community'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import CommunityUpdate from './customers/CommunityUpdate'
import CustomerSection from './customers/CustomerSection'
import Achievements from './unlock_section/Achievements'
import Unlock from './unlock_section/Unlock'
import UnlockUi from './unlock_section/UnlockUi'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ClientsUi/>
      <Community/>
      <Unlock/>
      <Achievements/>
      <UnlockUi/>
      <CustomerSection/>
      <CommunityUpdate/>
      <Footer/>
    </>
  )
}

export default App
