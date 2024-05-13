import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from "react";
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'

function App() {

  const [games, setGame] = useState();

  const getGames = async () => {

    try{
      const response = await api.get("/api/v1/games");

      console.log(response.data);

      setGame(response.data);
    } catch(error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
