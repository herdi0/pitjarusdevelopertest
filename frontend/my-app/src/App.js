import logo from './logo.svg';
import './App.css';
import Tabledata from './components/Tabledata'
import BarChart from './components/BarChart'
import { useState, useEffect } from 'react';

function App() {
  const [byArea, setByArea] = useState([])
  const [byBrand, setByBrand] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/nilaiByArea")
    .then((res) => res.json())
    .then((result) => {
      setByArea(result)
    });

    fetch("http://localhost:3000/nilaiByBrand")
    .then((res) => res.json())
    .then((result) => {
      setByBrand(result)
    });
  }, [])

  return (
    <div className="App">
      <BarChart byArea={byArea}/>
      <Tabledata byBrand={byBrand} />
    </div>
  );
}

export default App;
