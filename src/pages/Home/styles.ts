import styled from "styled-components";

export const HomeContainer = styled.section`
  max-width: 80rem;
  height: calc(100vh - 10rem);
  margin: 10rem auto;
  display: flex;
  padding: 3rem;
  flex-direction: row;
`;
export const HomeContent = styled.div`
  display: flex;
  width: 588px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-family: 'Baloo 2', sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    align-self: stretch;
  }
  strong {
    color: ${props => props.theme['base-title']};
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const CardContent = styled.div`
  width: 567px;
  height: 84px;
  flex-shrink: 0;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 3rem;
`;

export const HomeCard = styled.div`
  display: flex;
  width: 231px;
  align-items: center;
  gap: 12px;
`;
export const ImageLogo = styled.div`
  img {
    width: 476px;
    height: 360px;
    flex-shrink: 0;
  }
`;
