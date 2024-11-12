import react from 'react';
import './App.css';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination';


function App() {
  return (
    <div className="App">
     <Header />
     <Blogs />
     <Pagination />
    </div>
  );
}

export default App;
