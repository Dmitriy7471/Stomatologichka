import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import { AnimatePresence } from 'framer-motion';


const Home = lazy(() => import('./pages/home/Home'));
const Services = lazy(() => import('./pages/services/Services'));
const SleepTreatment = lazy(() => import('./pages/sleep-treatment/SleepTreatment'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sleep-treatment" element={<SleepTreatment />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Router>
  );
}

export default App;
