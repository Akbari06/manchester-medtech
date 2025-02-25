import './App.css';
import CommitteeList from './committee_cards';
import Socials from './socials';
import NavBar from './navbar';

function App() {
  return (
    <div>
      {/* Add padding-top to the parent div of NavBar */}
      <div className="pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-20">
        <NavBar />
      </div>
      <div className="pt-[80rem] sm:pt-48 md:pt-56 lg:pt-[70rem] xl:pt-[85rem]">
        <CommitteeList />
        <Socials />
      </div>
    </div>
  );
}

export default App;