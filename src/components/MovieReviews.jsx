import React from 'react';
import { useHttp } from '../Hooks/useHttp';
import { fetchMovieReviewsById } from '../Services/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useHttp(fetchMovieReviewsById, id);
  return (
    <div>
      MovieReviews
      <div>
        <h3>MovieCast</h3>
        <ul>
          {reviews?.map(review => (
            <li key={review.id}>
              <img
                width={250}
                height={300}
                loading="lazy"
                src={
                  review.profile_path
                    ? `https://image.tmdb.org/t/p/w500${review.profile_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
                }
                alt={review.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieReviews;
