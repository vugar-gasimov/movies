import React from 'react';

import { useHttp } from '../Hooks/useHttp';
import { fetchCastById } from '../Services/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { lessCutText } from 'Helpers/cutText';
import Loader from 'Loader/Loader';
const MovieCast = () => {
  const { id } = useParams();
  const [cast] = useHttp(fetchCastById, id);

  if (!cast || cast.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <Container>
      <Title>Movie Cast</Title>
      <CastList>
        {cast?.map(cast => (
          <CastMember key={cast.id}>
            <CastImage
              width={250}
              height={300}
              loading="lazy"
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
              }
              alt={cast.name}
            />
            <CastName>{lessCutText(cast.name)}</CastName>
            <CastCharacter>{lessCutText(cast.character)}</CastCharacter>
          </CastMember>
        ))}
      </CastList>
    </Container>
  );
};
export default MovieCast;
const Container = styled.div`
  display: flex;
  max-width: 1400px;
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

  overflow-x: auto;
  width: 100%;
`;

const CastMember = styled.div`
  min-width: 320px;
  height: fit-content;
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

const Title = styled.h3`
  color: #fdd03b;
  display: flex;
  justify-content: center;
`;
