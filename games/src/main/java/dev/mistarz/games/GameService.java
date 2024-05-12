package dev.mistarz.games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService{

    @Autowired
    private GameRepository gameRepository;

    public List<Game> allGames() {
        return gameRepository.findAll();        // findAll from mongo repository class
    }
}
