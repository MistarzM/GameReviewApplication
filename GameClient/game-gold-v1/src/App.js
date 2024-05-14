import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from "react";
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/header/Header'
import Trailer from './components/trailer/Trailer'
import Reviews from "./components/reviews/Reviews";
import NotFound from "./components/notFound/NotFound";

function App() {

  const [games, setGames] = useState();
  const [game, setGame] = useState();
  const [reviews, setReviews] = useState();


  const getGames = async () => {

    try{
      const response = await api.get("/api/v1/games");

      console.log(response.data);

      setGames(response.data);
    } catch(error) {
      console.log(error);
    }

  }

  const getGameData = async(gameId) =>{
    try{
      const response = await api.get(`/api/v1/games/${gameId}`);

      const singleGame = response.data;
      setGame(singleGame);

      setReviews(singleGame.reviews);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home games={games}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:gameId" element={<Reviews getGameData = {getGameData} game={game}  reviews = {reviews} setReviews = {setReviews}/>}></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
