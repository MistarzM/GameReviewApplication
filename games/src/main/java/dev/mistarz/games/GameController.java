package dev.mistarz.games;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")                   // fixes bug with blocking api
@RequestMapping("/api/v1/games")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping
    public ResponseEntity<List<Game>> getAllGames(){
        return new ResponseEntity<List<Game>>(gameService.allGames(), HttpStatus.OK);
    }

    @GetMapping("/{metacritic}")
    public ResponseEntity<Optional<Game>> getSingleGame(@PathVariable String metacritic){
        return new ResponseEntity<Optional<Game>>(gameService.signleGame(metacritic), HttpStatus.OK);
    }
}
