package dev.mistarz.games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewText, String metacritic){
        Review review = reviewRepository.insert(new Review(reviewText));

        mongoTemplate.update(Game.class)
                .matching(Criteria.where("metacritic").is(metacritic))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}
