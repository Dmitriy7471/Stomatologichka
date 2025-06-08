import Header from './component/header/header';
import BottomHeader from './component/header/bottom-header';
import Background from './component/Background/Background';
import { DoctorsTeamSection } from './component/doctorBlock/DoctorsTeamSection';
import { doctorsData } from './data/doctors';
function App() {
  
  return (
    <>
      <Header/>
      <BottomHeader/>
      <Background/>
      <DoctorsTeamSection doctors={doctorsData} />
    </>
  );
}

export default App;
