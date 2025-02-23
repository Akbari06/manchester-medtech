import './App.css'
import CommitteeList from './committee_cards'
import Socials from './socials'
import NavBar from './navbar'



function App() {

  return (
    <div className="app-container" style={{paddingTop:"540vh"}}>
        <NavBar/>
      <CommitteeList/>
      <Socials/>
    </div>
    
  )
}

export default App
