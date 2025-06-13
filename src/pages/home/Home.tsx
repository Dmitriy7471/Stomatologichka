import Header from '../../components/header/header';
import BottomHeader from '../../components/header/bottom-header';
import Background from './component/Background/Background';
import { DoctorsTeamSection } from './component/doctorBlock/DoctorsTeamSection';
import { doctorsData } from './data/doctors';
import { AppointmentForm } from '../../components/Froma/AppointmentForm';
import  { Footer } from '../../components/Footer/Footer';
import { PageLayout } from '../../components/PageLayout/PageLayout';
const Home: React.FC = () => {
  
  return (
    <PageLayout>
        
      <BottomHeader/>
      <Background/>
      <DoctorsTeamSection doctors={doctorsData} />
      <AppointmentForm/>

    </PageLayout>
  );
}

export default Home;