import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 990px) {
    width: 90vw;
  }

  @media (max-width: 576px) {
    width: 95vw;
  }
`;

export default StyledContainer;
