import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from "react";

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

    </div>
  );
}

export default App;
