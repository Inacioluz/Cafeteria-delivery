import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  img {
    max-width: 100px;
  }
`;

export const NavHeader = styled.header`
    display: flex;
    align-items: center;

    span {
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      background-color: ${(props) => props.theme['purple-light']};
      margin-right: 20px;
      color: black; 
      border-radius: 6px;
    } 
    span img {
        ${(props) => props.theme['purple']}
    }

    img {
      max-width: 30px;
    }
`
