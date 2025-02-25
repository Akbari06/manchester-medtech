import './App.css';
import CommitteeList from './committee_cards';
import Socials from './socials';
import NavBar from './navbar';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container" style={{ paddingTop: "10vh" }}>
        <CommitteeList />
        <Socials />
      </div>
    </div>
  );
}

export default App;