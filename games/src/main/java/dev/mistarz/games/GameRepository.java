package dev.mistarz.games;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GameRepository extends MongoRepository<Game, ObjectId> {
    Optional<Game> findGameByMetacritic(String metacritic);
}
