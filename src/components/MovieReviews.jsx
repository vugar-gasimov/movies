import React, { useEffect, useState } from 'react';

import { fetchReviewsById } from '../Services/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'Loader/Loader';

const MovieReviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    const get = async () => {
      setIsLoading(true);
      try {
        const res = await fetchReviewsById(id);
        setReviews(res);
        setExpanded(Array(res?.results.length).fill(false));
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    get();
  }, [id]);

  if (!reviews || reviews.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const toggleExpand = index => {
    setExpanded(prev => {
      const updateArray = [...prev];
      updateArray[index] = !updateArray[index];
      return updateArray;
    });
  };
  if (isLoading) return <Loader />;
  if (!reviews?.results.length) {
    return <Title>Unfortunately we couldn't find any reviews</Title>;
  }
  return (
    <ReviewsContainer>
      <ReviewList>
        {reviews?.results.map((review, index) => (
          <ReviewItem key={review.id}>
            <p>Author: {review.author}</p>

            <StyledText>
              {review.content.length > 150 && !expanded[index]
                ? `${review.content.slice(0, 150)}`
                : review.content}
              {review.content.length > 150 ? (
                <MoreBtn
                  button={expanded[index]}
                  onClick={() => toggleExpand(index)}
                >
                  {expanded[index] ? '...less' : '...more'}
                </MoreBtn>
              ) : null}
            </StyledText>
          </ReviewItem>
        ))}
      </ReviewList>
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
  display: flex;
  list-style: none;
  padding: 0;
  flex-direction: column;
  align-items: center;
`;

const ReviewItem = styled.li`
  max-width: 1000px;
  background-color: #10101058;
  color: #fdd03b;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
`;
const MoreBtn = styled.button`
  display: inline-flex;
  border: none;
  background-color: transparent;
  color: #e1b628;
  cursor: pointer;
`;

const StyledText = styled.p``;
