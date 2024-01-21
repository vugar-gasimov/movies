import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Main>
      <HeadingOne>About Us</HeadingOne>
      <HeadingTwo>Welcome to GoWatch</HeadingTwo>
      <Paragraph>
        At GoWatch, we are passionate about bringing the best cinematic
        experience to our users. Whether you're a casual moviegoer or a
        dedicated cinephile, we aim to provide a seamless platform for
        discovering, exploring, and enjoying the latest movies.
      </Paragraph>
      <HeadingTwo>Our Mission</HeadingTwo>
      <Paragraph>
        Our mission is simple - to connect movie enthusiasts with the world of
        cinema. We strive to create an immersive and user-friendly environment
        where you can easily find and enjoy the latest movies, explore detailed
        information about them, and connect with a community that shares your
        love for film.
      </Paragraph>
      <HeadingTwo>Explore Today's Trending Movies</HeadingTwo>
      <HeadingThree>Home Section</HeadingThree>
      <Paragraph>
        At GoWatch, your movie journey begins with our Home section. Here, you
        can explore a curated list of today's trending movies. From blockbuster
        hits to hidden gems, our collection caters to diverse tastes. The
        personalized touch ensures you always feel welcomed. Your name, if
        you're logged in, adds a personal touch to your movie discovery
        experience.
      </Paragraph>
      <HeadingTwo>Welcome to GoWatch</HeadingTwo>
      <HeadingThree>Home Section</HeadingThree>
      <Paragraph>
        At GoWatch, we are passionate about bringing the best cinematic
        experience to our users. Whether you're a casual moviegoer or a
        dedicated cinephile, we aim to provide a seamless platform for
        discovering, exploring, and enjoying the latest movies.
      </Paragraph>
      <HeadingTwo>Dive Deeper into Movie Details</HeadingTwo>
      <HeadingThree>Movies Section</HeadingThree>
      <Paragraph>
        In the Movies section, we provide you with a powerful search feature to
        find movies based on your preferences. Simply enter your query, and
        we'll fetch the most relevant results for you. Explore detailed
        information, watch trailers, and make informed decisions about your next
        movie night.
      </Paragraph>
      <HeadingTwo>Uncover the Magic of Movie Details</HeadingTwo>
      <HeadingThree>Movie Details Section</HeadingThree>
      <Paragraph>
        For those seeking a deeper dive into the world of a specific movie, our
        Movie Details page is the place to be. From high-quality images to
        comprehensive details about the cast, reviews, and more, we've got you
        covered. Immerse yourself in the story, characters, and background of
        each film.
      </Paragraph>
      <HeadingTwo>Connect with the Cast</HeadingTwo>
      <HeadingThree>Movie Cast Section</HeadingThree>
      <Paragraph>
        Ever wondered about the talented individuals who bring your favorite
        characters to life? Our Movie Cast section introduces you to the cast
        members, complete with images and character details. Get to know the
        faces behind the performances that make your movie experience
        unforgettable.
      </Paragraph>
      <HeadingTwo>Hear What Others Have to Say</HeadingTwo>
      <HeadingThree>Movie Reviews Section</HeadingThree>
      <Paragraph>
        Curious about what others think of a movie? Our Movie Reviews section
        provides you with insights from fellow movie enthusiasts. Read reviews,
        get recommendations, and share your thoughts with the community.
      </Paragraph>
      <HeadingTwo>Join GoWatch Today</HeadingTwo>

      <Paragraph>
        Ready to embark on a cinematic journey like never before? Join GoWatch
        today! Whether you're a seasoned movie buff or just starting your film
        exploration, we have something for everyone. Sign up, customize your
        profile, and let the magic of movies unfold.
      </Paragraph>
      <Paragraph>
        At GoWatch, we believe that every movie has a story to tell, and we're
        here to help you discover yours. Lights, camera, action – let the
        adventure begin!
      </Paragraph>
    </Main>
  );
};

export default About;

const Main = styled.main`
  max-width: 800px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #00000042;
  border-radius: 30px;
  padding: 20px;
`;

const HeadingOne = styled.h1`
  color: orange;
`;
const HeadingTwo = styled.h2`
  color: orange;
`;
const HeadingThree = styled.h3`
  color: orange;
`;
const Paragraph = styled.p`
  color: black;
`;
