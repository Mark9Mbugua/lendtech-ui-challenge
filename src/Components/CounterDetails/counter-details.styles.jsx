import styled from "styled-components";

export const CounterDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 40%;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 1.2rem;
`;

export const IsEvenContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IsEvenBoolean = styled.p`
  font-weight: 470;
  color: ${({ isEven }) => (isEven === true ? "#24c918" : "#9c00f6")};
`;
