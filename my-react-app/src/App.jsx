import './App.css';
import CommitteeList from './committee_cards';
import Socials from './socials';
import NavBar from './navbar';
import Events from './events';

function App() {
  return (
    <main className="flex flex-col min-h-screen pt-[103rem] md:pt-[90rem] lg:pt-[110rem] xl:pt-[95rem]">
      <NavBar />
      <div className="pt-[5rem] md:pt-[0.5rem] lg:pt-[3.5rem] xl:pt-[0.5rem]"> {/* Reduced margin-top */}
        <CommitteeList />
        <Socials />
        <Events />
      </div>
    </main>
  );
}

export default App;