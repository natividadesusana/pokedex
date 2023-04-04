import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -30px;
  padding-top: 20px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const PokemonName = styled.div`
  color: #333;
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ bg }) => bg || "#fff"};
  transition: all 0.2s ease-in-out;
  animation: ${({ clicked }) => (clicked ? spin : "none")} 1s linear;

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#ccc"};
    cursor: pointer;
  }
`;
