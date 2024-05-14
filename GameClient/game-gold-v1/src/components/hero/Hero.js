import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({games}) => {

        const navigate = useNavigate();

        function reviews(gameId){
            navigate(`/Reviews/${gameId}`);
        }

    return(
        <div className='game-carousel-container'>
            <Carousel>
                {
                    games?.map((game) =>{
                        return (
                            <Paper key={game.metacritic}>
                              <div className= 'game-card-container'>
                                  <div className='game-card' style={{"--img": `url(${game.backdrops[0]})`}}>
                                    <div className='game-detail'>
                                        <div className='game-poster'>
                                            <img src = {game.poster} alt=""/>
                                        </div>
                                        <div className='game-title'>
                                            <h4>{game.title}</h4>
                                        </div>
                                        <div className="game-buttons-container">
                                            <Link to={`/Trailer/${game.trailerLink.substring(game.trailerLink.length - 11)}`}>
                                                <div className="play-button-idon-container">
                                                    <FontAwesomeIcon className="play-button-icon"
                                                                     icon = {faCirclePlay}
                                                                     />
                                                </div>
                                            </Link>
                                            <div className="game-review-button-container">
                                                <Button variant = "info" onClick={() => reviews(game.metacritic)} > Reviews </Button>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero;