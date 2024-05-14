import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"

const Hero = ({games}) => {
    return(
        <div className='game-carousel-container'>
            <Carousel>
                {
                    games?.map((game) =>{
                        return (
                            <Paper>
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