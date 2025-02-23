import './App.css'
import CommitteeList from './committee_cards'
import Socials from './socials'
import NavBar from './navbar'



function App() {

  return (
    <div className="app-container">
      <div style={{paddingTop:"4200px"}}>
        <NavBar/>
      </div>
      <CommitteeList/>
      <Socials/>
    </div>
    
  )
}

export default App
