import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    width: 30%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
