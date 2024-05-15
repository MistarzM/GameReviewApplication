import {useEffect, useRef} from "react";
import api from '../../api/axiosConfig'
import {useParams} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import ReviewForm from "../reviewForm/ReviewForm";

import React from 'react';

const Reviews = ({getGameData, game, reviews, setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const gameId = params.gameId;

    useEffect(()=>{
        getGameData(gameId);
    }, [])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", {reviewText: rev.value, metacritic: gameId});

            const updatedReviews = [...reviews, {text: rev.value}];

            rev.value = "";
            setReviews(updatedReviews);
        } catch(error) {
            console.log(error);
        }

    }

    return(
        <div>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={game?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{r.text}</Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </div>
    )

}

export default Reviews;