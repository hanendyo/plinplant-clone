import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const Container = styled(StyledContainer)`
  & > h2 {
    color: ${colors.white};
  }
`;
