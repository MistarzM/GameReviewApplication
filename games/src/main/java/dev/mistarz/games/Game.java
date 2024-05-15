package dev.mistarz.games;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "games")
@Data                                   //  @Data takes care about setters and getters, string methods
@AllArgsConstructor                     // constructor takes all these private variables as argument
@NoArgsConstructor
public class Game {

    @Id                                 // @id => unique id for every game
    private ObjectId id;
    private String metacritic;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private List<String> genres;
    private String poster;
    private String developer;
    private List<String> backdrops;
    private List<String> platforms;
    @DocumentReference              // In games collection, there will only be a list of review ids,
    private List<Review> reviews; // and the reviews will be in a different collection
}

