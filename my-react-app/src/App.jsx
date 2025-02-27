import './App.css';
import CommitteeList from './committee_cards';
import Socials from './socials';
import NavBar from './navbar';

function App() {
  return (
    <div>
      <NavBar />
      {/* Small padding for spacing between navbar and content */}
      <div className="pt-4">
        <CommitteeList />
        <Socials />
      </div>
    </div>
  );
}

export default App;