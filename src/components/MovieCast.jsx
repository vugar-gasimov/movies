import React from 'react';

import { useHttp } from '../Hooks/useHttp';
import { fetchCastById } from '../Services/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useHttp(fetchCastById, id);
  return (
    <Container>
      <h3>Movie Cast</h3>
      <CastList>
        {cast?.map(cast => (
          <CastMember key={cast.id}>
            <CastImage
              width={100}
              height={100}
              loading="lazy"
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
              }
              alt={cast.name}
            />
            <CastName>{cast.name}</CastName>
            <CastCharacter>{cast.character}</CastCharacter>
          </CastMember>
        ))}
      </CastList>
    </Container>
  );
};
export default MovieCast;
const Container = styled.div`
  display: flex;
  width: 100vh;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
`;

const CastList = styled.div`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  height: 350px;
  overflow-x: auto;
  width: 100%;
`;

const CastMember = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #fdd03b;
`;

const CastImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const CastName = styled.h3`
  margin: 10px 0;
  color: #333;
`;

const CastCharacter = styled.p`
  color: #666;
`;
