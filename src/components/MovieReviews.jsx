import React, { useState } from 'react';
import { useHttp } from '../Hooks/useHttp';
import { fetchReviewsById } from '../Services/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'Loader/Loader';

const MovieReviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews] = useHttp(fetchReviewsById, id);
  const [expanded, setExpanded] = useState([]);

  if (!reviews || reviews.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!reviews?.results.length) {
    return <Title>Unfortunately we couldn't find any reviews</Title>;
  }
  return (
    <ReviewsContainer>
      <div>
        <Title> Movie Reviews</Title>
        <ReviewList>
          {reviews?.map(review => (
            <ReviewItem key={review.id}>
              <p>Author: {review.author}</p>
              {review.name && <p>Name: {review.name}</p>}
              {review.name && <p>Rating: {review.rating}</p>}

              <p>Content: {review.content}</p>
              <p>Created at: {review.created_at}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      </div>
    </ReviewsContainer>
  );
};

export default MovieReviews;

const Title = styled.h3`
  color: #fdd03b;
  display: flex;
  justify-content: center;
`;

const ReviewsContainer = styled.div`
  padding: 20px;
`;

const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReviewItem = styled.li`
  background-color: #10101058;
  color: #fdd03b;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
`;
