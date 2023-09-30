
import { Routes } from 'react-router';
import { Route } from 'react-router';
import {LayOut , Home , About , Contact} from './components';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
