import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 10px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fill, 250px);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerImg = styled.div`
  text-align: right;
`;

export const Card = styled.div`
  border-left: 3px solid #3bb54a;
  border-radius: 4px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  transition: all 0.3s ease-out;
  padding: 0.5rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Title = styled.p`
  color: #0c0c0e;
  font-size: 18px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #323235;
  font-size: 16px;
`;
