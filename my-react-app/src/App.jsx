import './App.css';
import CommitteeList from './committee_cards';
import Socials from './socials';
import NavBar from './navbar';

function App() {
  return (
    <div>
      {/* Pixel-based padding-top for NavBar */}
      <div className="pt-[32px] sm:pt-[48px] md:pt-[64px] lg:pt-[80px] xl:pt-[96px]">
        <NavBar />
      </div>
      {/* Padding for CommitteeList and Socials (optional) */}
      <div className="pt-[16px] sm:pt-[24px] md:pt-[32px] lg:pt-[40px] xl:pt-[48px]">
        <CommitteeList />
        <Socials />
      </div>
    </div>
  );
}

export default App;