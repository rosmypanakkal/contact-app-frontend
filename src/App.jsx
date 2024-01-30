
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Edit from './Components/Edit';
import Add from './Components/Add';
import PageNotFound from './Components/PageNotFound'
import View from './Components/View';
import Details from './Components/Details';





function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <Routes>
          <Route  path='/' element={<Admin/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
