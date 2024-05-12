package dev.mistarz.games;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService{

    @Autowired
    private GameRepository gameRepository;

    public List<Game> allGames() {
        return gameRepository.findAll();        // findAll from mongo repository class
    }

    public Optional<Game> signleGame(String metacritic){
        return gameRepository.findGameByMetacritic(metacritic);
    }
}
