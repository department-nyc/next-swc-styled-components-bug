import styled, { css } from "styled-components";

export const ExtendMe = styled.div`
  color: red;
`;

export const ExtendedExample1 = styled(ExtendMe)`
  font-size: 2rem;
`;
